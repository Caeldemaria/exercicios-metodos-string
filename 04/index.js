let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

function identificadorFormt(identificador) {
    if (identificador.length === 6) {
        console.log(identificador)
    }
    else {
        console.log(identificador.padStart(6, '0'))
    }
}

function nomeFOr(nome) {
    let array = nome.split(' ')

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].substr(1)
    }

    console.log(array.join(' '))
}

function emailFormt(email) {
    let format = email.trim()
    console.log(format)
}

identificadorFormt(identificador)
nomeFOr(nome)
emailFormt(email)

