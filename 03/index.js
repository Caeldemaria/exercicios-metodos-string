const texto = "Aprenda programar do zero na Cubos Academy";
function URL(texto) {
    const textoMI = texto.toLowerCase()
    const array = textoMI.split(' ')
    for (let i = 1; i < array.length; i++) {
        if (array[i]) {
            array.splice(i, 0, '-')
        }
        i++

    } return array.join('')
}
console.log(URL(texto))

