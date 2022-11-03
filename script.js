///////////////////////////////////////////////////////////
//Генератор генерирует слова на основе сочетаний слогов.
//Слово может начинаться, как с гласной, так и с согласной.
//Рядом может стоять не более двух символов одной группы.
//Количество символов и слов определяется пользователем.
///////////////////////////////////////////////////////////

let vowels = ['a','e','i','o','u','y']
let consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z']
let abc = [vowels, consonants]

function generationWords() {
    resultText.value = ''

    for (numGen = 0; numGen < countGen.value; numGen++) {
        generationWord()
    }
}

function generationWord() {
    let word = ''
    let rundomSymbol

    for (i = 0; i < countSymbols.value; i++) {
        if (i > 0) {
            if (vowels.indexOf(word[word.length - 1]) > -1) { //Если последная буква гласная
                for (j = 0; j < getRandomIntRange(1, 2); j++) {
                    word = word + consonants[getRandomInt(consonants.length)]
                }
            } else { //Если последная буква согласная
                for (j = 0; j < getRandomIntRange(1, 2); j++) {
                    word = word + vowels[getRandomInt(vowels.length)]
                }
            }
        } else {
            let randAbc = abc[getRandomInt(abc.length)]
            let countRandSymbol

            if (randAbc == vowels) {
                countRandSymbol = getRandomIntRange(1, 2)
            } else {
                countRandSymbol = 1
            }

            for (j = 0; j < countRandSymbol; j++) {
                word = word + randAbc[getRandomInt(randAbc.length)]
            }
        }
    }

    resultText.value = resultText.value + word + '\n'
}

function clearResult() {
    resultText.value = ''
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

buttonRunGen.onclick = generationWords
buttonClear.onclick = clearResult