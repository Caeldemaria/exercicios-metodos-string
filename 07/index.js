const email = "aluno@cubos.academy";
function emailvalido(email) {

    let emailArray = email.split('')
    for (let i = 0; i < emailArray.length; i++) {
        if (emailArray[i] === '@' && emailArray[i] === '.') {
            console.log('Email Válido')
            break
        } else {
            console.log('Emai Inválido')
            break
        }

    }

    if (emailArray[0] === '.' && emailArray[1] === 'com' || emailArray[-1] == '.') {
        console.log('Email InVálido')
    }
}


emailvalido(email)