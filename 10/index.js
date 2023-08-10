const nomeArquivo = 'Foto da Familia.jpg';
function valido(nomeArquivo) {
    if (nomeArquivo.includes('jpg') === true || nomeArquivo.includes('jpeg') === true || nomeArquivo.includes('gif ') === true || nomeArquivo.includes(' png') === true) {
        console.log('Arquivo válido')
    } else {
        console.log('Arquivo Inválido')
    }

}
valido(nomeArquivo)
