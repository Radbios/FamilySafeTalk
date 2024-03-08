#Pre-Process
import spacy
import nltk
from metaphone import doublemetaphone
from fuzzywuzzy import fuzz
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords


nltk.download('stopwords')
nltk.download('punkt')
nltk.download('wordnet')

nlp = spacy.load("pt_core_news_sm", disable=["tokenizer", "parser", "ner"])
nltk
# #Modelo
# import joblib
# from sklearn.feature_extraction.text import CountVectorizer

#Lista das substituições dos fonemas
substituicoes = {
        'quinho' : 'co', 'quinha' : 'ca',
        'zinho': ' ', 'zinha' : ' ', 'zão' : ' ', 'zona' : ' ',
        'inho' : 'oh', 'inha' : 'ah', 'ão' : 'oh', 'ona': 'ah', 
        'ae': 'aheh', 'ai': 'ahee', 'ao': 'ahoh', 'au': 'ahl',
        'ea': 'ehah', 'ei': 'ehee', 'eo': 'ehoh', 'eu': 'ehl',
        'ia': 'eeah', 'ie': 'eeeh', 'io': 'eeoh', 'iu': 'eel',
        'oa': 'ohah', 'oe': 'oheh', 'oi': 'ohee', 'ou': 'ohl',
        'ua': 'ooah', 'ue': 'ooeh', 'ui': 'ooee', 'uo': 'oooh',
        'a': 'ah', 'e': 'eh', 'i': 'ee', 'o': 'oh', 'u': 'oo'
    }

def tokenizar(texto):
  tokens = word_tokenize(texto)
  #print(tokens)
  return tokens

def stop_words(tokens):
  stop_words = set(stopwords.words('portuguese'))
  stop_words.discard('não')
  tokens_sem_stopwords = [token for token in tokens if token.lower() not in stop_words]
  #print(tokens_sem_stopwords)
  return tokens_sem_stopwords

# def lematizar(tokens):
#   tokens = nlp(tokens, disable=["tokenizer", "parser", "ner"])
#   lemas = [token.lemma_ for token in tokens]
#   return lemas

# def pre_process(texto):

#   tokens = tokenizar(texto)
#   tokens_no_stop_words = stop_words(tokens)
#   frase = ' '.join(tokens_no_stop_words)
#   frase_processed = lematizar(frase)
#   #frase_processed = ' '.join(frase_processed)

#  return frase_processed

def palavra_fonema(palavra):

  for k, v in substituicoes.items():
      palavra = palavra.replace(k, v)

  #print(palavra)
  return palavra

def pre_process_keywords(texto):
  tokens = word_tokenize(texto)

  stop_words = set(stopwords.words('portuguese'))
  stop_words.discard('não')
  tokens_sem_stopwords = [token for token in tokens if token.lower() not in stop_words]

  fonemas = []
  for i in tokens_sem_stopwords:
    fonemas.append(palavra_fonema(i))
  fonemas = ' '.join(fonemas)

  return fonemas

def preprocessar_palavroes(palavroes):
  palavroes_process = []
  for i in palavroes:
    palavroes_process.append((palavra_fonema(i), i))
  #print(palavroes_process)
  return palavroes_process

with open("back/storage/classifier/keywords.txt", "r") as arquivo:
    conteudo = arquivo.read()
    palavroes = conteudo.split()

palavroes_process = preprocessar_palavroes(palavroes)

# def carregar_modelo():
#     model = joblib.load('storage/classifier/trained_Model')
#     return model

# def classificar(texto, model):
#    vectorizer = joblib.load('storage/classifier/vetorizador')
#    msg_vector = vectorizer.transform(texto)
#    result = model.predict(msg_vector)

#    return result[0]

def verificar_palavra(frase, palavra_nova, palavroes_process):
    for palavra in palavroes_process:
        distancia = fuzz.ratio(palavra_nova, palavra[0])
        #print(distancia, palavra[0], palavra_nova)
        if distancia >= 95:
          palavra_achada = palavra
          #print(palavra_achada)
          return frase, palavra_achada
        if distancia > 80:
            metaphone_code = doublemetaphone(palavra_nova)
            metaphone_code_key1 = doublemetaphone(palavra[0])[0]
            metaphone_code_key2 = doublemetaphone(palavra[0])[1]
            for code in metaphone_code:
                if ((fuzz.ratio(code, metaphone_code_key1) >= 85) or (fuzz.ratio(code, metaphone_code_key1) >= 85)) and code!= "":
                    palavra_achada = palavra
                    #print(palavra_achada)
                    return frase, palavra_achada
    return None, None


mensagens = [("Vc é uma escrota")]
msgs = []
for msg in mensagens:
  msgs.append(([pre_process_keywords(msg), msg]))
#print(msgs)

for i in msgs:
  tokens = word_tokenize(i[0])
  for j in tokens:
    frase, palavra_achada = verificar_palavra(i[1], j.lower(), palavroes_process)
    if palavra_achada != None:
        print("Na frase:", frase, "\nTem uma palavra semelhante a", palavra_achada[1])
        #print("keyword")

# msg = "Podemos conversar? Mas não pode falar pros seus pais"
# model = carregar_modelo()

# msg = pre_process(msg)

# print("Mensagem: ", msg)
# print("Classificação: ", classificar(msg, model))