import nltk
nltk.download('stopwords')
nltk.download('punkt')

import subprocess
subprocess.run(["python", "-m", "spacy", "download", "pt_core_news_sm"])