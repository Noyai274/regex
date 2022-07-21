export const expService = {
    getExp
}

function getExp(str) {
    if (str[0]==='+' && str[1]=== '\\'){
        return 'adds the symbol '+ str[2]
    }
    if (str[0]==='+'){
        return 'adds the symbol '+ str[1]
    }
    if (str[0]==='[' && str[str.length-1]=== ']'){
        let exp = 'includes '
        if (str.includes('a-z')) exp += 'all lowercase letters '
        if (str.includes('A-Z')) exp += 'all uppercase letters '
        if (str.includes('0-9')) exp += 'all numbers '
        return exp
    }

}