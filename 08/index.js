const cpf = "011.022.033-44";
function novoC(cpf) {
    let array = cpf.split('')
    let novo = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] != '.' && array[i] != '-' && array[i] != '/') {
            novo.push(array[i])
        }

    } console.log(novo.join(' '))
}
novoC(cpf)