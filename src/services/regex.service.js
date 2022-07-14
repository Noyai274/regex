export const regexService = {
    translate,
}
const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz'
const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBERS = '0123456789'
const SYMBOLS = '!@#$%^&*()*+,-./:;<=>?@[]{}|'
const REGEX_CHARS = '.+*?^$()[]{}|\\'

function translate(str) {
    const trans = []
    const strArr = Array.from(str)
    const newArr = _prepareArray(strArr)
    console.log(newArr)
    newArr.map(item => {
        if (typeof item === 'object') {
            trans.push(_checkLettersAndNums(item))
        }
        else trans.push(item)
    })
    return trans
}

function _checkLettersAndNums(strArr) {
    const trans = []
    trans.push('[')
    strArr.map(letter => {
        if (LOWER_CASE.includes(letter)) {

            if (trans.includes('a-z') === false) trans.push('a-z')
        }
        if (UPPER_CASE.includes(letter)) {
            if (trans.includes('A-Z') === false) trans.push('A-Z')
        }
        if (NUMBERS.includes(letter)) {
            if (trans.includes('0-9') === false) trans.push('0-9')
        }
    })
    trans.push(']')
    return trans.join('')

}

function _prepareArray(strArr) {
    const readyArr = []
    let arr = []
    strArr.forEach(str => {
        console.log(str)
        if (!SYMBOLS.includes(str)) arr.push(str)
        else {
            if (arr.length) readyArr.push(arr)
            arr = []
            if (REGEX_CHARS.includes(str))readyArr.push(`+\\` + str + '')
            else readyArr.push(`+` + str )
        }
    })
    if (arr.length) readyArr.push(arr)
    return readyArr
}