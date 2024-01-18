import subprocess
import spacy
import nltk
from pathlib import Path

try:
    import pipenv
except ImportError:
    # Se o módulo pipenv não estiver instalado, instale-o
    subprocess.run(["pip", "install", "pipenv"])

# Verificar se o arquivo Pipfile existe (indicando que o ambiente virtual está configurado)
if not Path("Pipfile").is_file():
    # Se o Pipfile não existir, execute o comando para criar o ambiente virtual e instalar as dependências
    subprocess.run(["pipenv", "install"])

def download_spacy_data():
    try:
        spacy.load("pt_core_news_sm")
    except OSError:
        subprocess.run(["python", "-m", "spacy", "download", "pt_core_news_sm"])

def download_nltk_data():
    nltk.download('stopwords')
    nltk.download('punkt')

if __name__ == "__main__":
    download_spacy_data()
    download_nltk_data()
