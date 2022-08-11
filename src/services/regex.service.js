export const regexService = {
    translate,
    translatePopular,
    addOptions,
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
    newArr.map(item => {
        if (typeof item === 'object') {
            trans.push(_checkLettersAndNums(item))
        }
        else trans.push(item)
    })
    return trans
}

function addOptions(trans, options) {
    console.log('trans', trans)
    console.log('options', options)
}

function translatePopular(string) {
    switch (string) {
        case 'Email':
            return ['[^@ \\t\\r\\n]', '+@', '[^@ \\t\\r\\n]', '+\\.', '[^@ \\t\\r\\n]', '+']
        case 'Password':
            return ['^', '(?=.*?[A-Z])', '(?=.*?[a-z])', '(?=.*?[0-9])', '(?=.*?[#?!@$ %^&*-])', '.{8,}$']
        case 'Phone number':
            return ['^', '[\\+]', '?[(]?[0-9]{3}[)]', '?[-\\s\\.]', '?[0-9]', '{3}', '[-\\s\\.]', '?[0-9]', '{4,6}$']
        case 'Date':
            return ['(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))','(?:(?:1[6-9]|[2-9]\\d)?\\d{2})','$|^','(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))','$|^','(?:0?[1-9]|1\\d|2[0-8])','(\\/|-|\\.),','(?:(?:0?[1-9])|(?:1[0-2]))','\\4','(?:(?:1[6-9]|[2-9]\\d)?\\d{2})']
        case 'Website':
            return ['(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})']
        case 'ip address':
            return ['(\\b25[0-5]|\\b2[0-4][0-9]|\\b[01]?[0-9][0-9]?)', '(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))', '{3}']
        default:
            return ''
    }
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
        if (!SYMBOLS.includes(str)) arr.push(str)
        else {
            if (arr.length) readyArr.push(arr)
            arr = []
            if (REGEX_CHARS.includes(str)) str = (`\\` + str)
            if (readyArr.length) str = (`+` + str)
            readyArr.push(str)
        }
    })
    if (arr.length) {
        readyArr.push(arr)
    }
    return readyArr
}