import subprocess
import spacy
import nltk
from pathlib import Path

try:
    import pipenv
except ImportError:
    subprocess.run(["pip", "install", "pipenv"])

if not Path("Pipfile").is_file():
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
