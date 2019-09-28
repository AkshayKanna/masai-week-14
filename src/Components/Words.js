import words from "./data.json"

export const randomWord = () => {
    const id = Math.floor(Math.random() * words.length)
    return words[id]
}

export const renderWord = (word, filled_word) => {
    return word
        .split('')
        .map(letter => filled_word.indexOf(letter) > -1 ? letter : '   _   ')
        .join('')
}

export const done = (word, filled_word) => {
    return word === renderWord(word, filled_word)
}