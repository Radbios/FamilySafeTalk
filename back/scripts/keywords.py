from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import nltk
import re
from metaphone import doublemetaphone
from fuzzywuzzy import fuzz
import sys

# nltk.download('stopwords')
# nltk.download('punkt')
# nltk.download('wordnet')

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
  #tokens_sem_stopwords = ' '.join(tokens_sem_stopwords)

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

palavroes = ['arrombado', 'vagabunda', 'viado', 'caralho', 'poha', 'porra', 'pau', 'babaca', 'brocha', 'bicha', 'boiola', 'cracudo', 'puta','vagabundo', 'pau', 'cu', 'coo', 'corno', 'corna', 'fodido', 'canalha', 'escroto', 'trouxa']
palavroes_process = preprocessar_palavroes(palavroes)

with open("keywords.txt", "w") as arquivo:
    for palavra in palavroes:
        arquivo.write(palavra + " ")

with open("keywords.txt", "r") as arquivo:
    conteudo = arquivo.read()
    palavroes = conteudo.split()

def verificar_palavra(frase, palavra_nova, palavroes_process):
    for palavra in palavroes_process:
        distancia = fuzz.ratio(palavra_nova, palavra[0])
        #print(distancia, palavra[0], palavra_nova)
        if distancia >= 95:
          palavra_achada = palavra
          #print(palavra_achada)
          return frase, palavra_achada
        if distancia > 75:
            metaphone_code = doublemetaphone(palavra_nova)
            metaphone_code_key1 = doublemetaphone(palavra[0])[0]
            metaphone_code_key2 = doublemetaphone(palavra[0])[1]
            for code in metaphone_code:
                if ((fuzz.ratio(code, metaphone_code_key1) >= 80) or (fuzz.ratio(code, metaphone_code_key2) >= 80)) and code!= "":
                    palavra_achada = palavra
                    #print(palavra_achada, palavra_nova)
                    return frase, palavra_achada
    return None, None

if len(sys.argv) > 1:
  mensagem = sys.argv[1]

  msg = ([pre_process_keywords(mensagem), mensagem])

  tokens = word_tokenize(msg[0])
  for i in tokens:
    frase, palavra_achada = verificar_palavra(msg[1], i.lower(), palavroes_process)
    if palavra_achada != None:
        print("Na frase", frase, "há uma palavra semelhante a", palavra_achada[1])
