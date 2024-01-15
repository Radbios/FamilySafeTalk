#Pre-Process
import nltk
import spacy
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
#nltk.download('stopwords')
#nltk.download('punkt')
nlp = spacy.load("pt_core_news_sm", disable=["tokenizer", "parser", "ner"])

#Modelo
import joblib
from sklearn.feature_extraction.text import CountVectorizer

def tokenizar(texto):
  tokens = word_tokenize(texto)
  #print(tokens)
  return tokens

def stop_words(tokens):
  stop_words = set(stopwords.words('portuguese'))
  tokens_sem_stopwords = [token for token in tokens if token.lower() not in stop_words]
  #print(tokens_sem_stopwords)
  return tokens_sem_stopwords

def lematizar(tokens):
  tokens = nlp(tokens, disable=["tokenizer", "parser", "ner"])
  lemas = [token.lemma_ for token in tokens]
  return lemas

def pre_process(texto):

  tokens = tokenizar(texto)
  tokens_no_stop_words = stop_words(tokens)
  frase = ' '.join(tokens_no_stop_words)
  frase_processed = lematizar(frase)
  #frase_processed = ' '.join(frase_processed)

  return frase_processed

def carregar_modelo():
    model = joblib.load('./back/storage/classifier/trained_Model')
    return model

def classificar(texto, model):
   vectorizer = joblib.load('./back/storage/classifier/vetorizador')
   msg_vector = vectorizer.transform(texto)
   result = model.predict(msg_vector)

   return result[0]

msg = "Você já experimentou cozinhar algo novo? Quer trocar receitas?"
model = carregar_modelo()

msg = pre_process(msg)

print("Mensagem: ", msg)
print("Classificação: ", classificar(msg, model))
