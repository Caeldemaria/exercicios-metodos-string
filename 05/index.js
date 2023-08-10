const numeroCartao = '1111222233334444';
function cartao(numeroCartao) {
    array = numeroCartao.split('')
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[4] || array[i] === array[5] || array[i] === array[6] || array[i] === array[7] || array[i] === array[8] || array[i] === array[9] || array[i] === array[10] || array[i] === array[11])
            array[i] = '*'
    }
    console.log(array.join(' '))
}
cartao(numeroCartao)