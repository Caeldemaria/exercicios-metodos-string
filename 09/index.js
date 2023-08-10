const nome = 'Guido Cerqueira';
function nickName(nome) {
    let minusculo = nome.toLowerCase()
    let espaço = minusculo.split(' ')
    let novo = espaço.join('')
    let nickName = `@${novo.substring(0, 13)}`
    console.log(nickName)


}
nickName(nome)