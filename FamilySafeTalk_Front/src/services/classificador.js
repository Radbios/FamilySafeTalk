import {palavroes} from "../services/palavroes"

export function classificar (msg) {
    
    const natural = require('natural');
    const { doubleMetaphone } = require('natural');
    //const { FuzzySet } = require('fuzzyset.js');
    const stopwords = require('stopwords-pt');

    const nlp = new natural.PorterStemmerPt();

    const substituicoes = {
        'quinho': 'co', 'quinha': 'ca',
        'zinho': ' ', 'zinha': ' ', 'zão': ' ', 'zona': ' ',
        'inho': 'oh', 'inha': 'ah', 'ão': 'oh', 'ona': 'ah',
        'ae': 'aheh', 'ai': 'ahee', 'ao': 'ahoh', 'au': 'ahl',
        'ea': 'ehah', 'ei': 'ehee', 'eo': 'ehoh', 'eu': 'ehl',
        'ia': 'eeah', 'ie': 'eeeh', 'io': 'eeoh', 'iu': 'eel',
        'oa': 'ohah', 'oe': 'oheh', 'oi': 'ohee', 'ou': 'ohl',
        'ua': 'ooah', 'ue': 'ooeh', 'ui': 'ooee', 'uo': 'oooh',
        'a': 'ah', 'e': 'eh', 'i': 'ee', 'o': 'oh', 'u': 'oo'
    };

    function palavraFonema(palavra) {
        for (const [k, v] of Object.entries(substituicoes)) {
            palavra = palavra.replace(k, v);
        }
        return palavra;
    }

    function preProcessKeywords(texto) {
        const tokens = natural.Tokenizer(texto);
        const stopWords = stopwords();
        const tokensSemStopwords = tokens.filter(token => !stopWords.includes(token.toLowerCase()));

        const fonemas = tokensSemStopwords.map(token => palavraFonema(token));
        return fonemas.join(' ');
    }

    function preprocessarPalavroes(palavroes) {
        const palavroesProcess = [];
        for (const palavra of palavroes) {
            palavroesProcess.push([palavraFonema(palavra), palavra]);
        }
        return palavroesProcess;
    }

    const palavroesProcess = preprocessarPalavroes(palavroes);

    function verificarPalavra(frase, palavraNova, palavroesProcess) {
        for (const palavra of palavroesProcess) {
            const distancia = natural.JaroWinklerDistance(palavraNova, palavra[0]);
            if (distancia >= 0.95) {
                return [frase, palavra];
            }
            if (distancia > 0.80) {
                const metaphoneCode = doubleMetaphone(palavraNova);
                const metaphoneCodeKey1 = doubleMetaphone(palavra[0])[0];
                const metaphoneCodeKey2 = doubleMetaphone(palavra[0])[1];
                for (const code of metaphoneCode) {
                    if (((natural.JaroWinklerDistance(code, metaphoneCodeKey1) >= 0.85) || (natural.JaroWinklerDistance(code, metaphoneCodeKey2) >= 0.85)) && code !== "") {
                        return [frase, palavra];
                    }
                }
            }
        }
        return [null, null];
    }

    msg = mensagens.map(msg => [preProcessKeywords(msg), msg]);

    const tokens = natural.Tokenizer(i[0]);

    for (const j of tokens) {
        const [frase, palavraAchada] = verificarPalavra(i[1], j.toLowerCase(), palavroesProcess);
        if (palavraAchada !== undefined) {
            console.log(`Na frase "${frase}", há uma palavra semelhante a "${palavraAchada[1]}"`);
        }
    }

}