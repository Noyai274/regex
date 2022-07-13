export const regexService={
    translate,
}

const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz'
const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const SYMBOLS = '!@#$%^&*()*+,-./:;<=>?@[]{}|'

function translate(str){
    return str.toUpperCase()
}