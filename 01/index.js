const comentario = "Esse Covid é muito perigoso!";
const comentariomin = comentario.toLowerCase()
function palavraProibida(comentariomin) {
    if (comentariomin === comentariomin.includes('pandemia') || comentariomin === comentariomin.includes('covid')) {

    }
    console.log('Comentário bloqueado por conter palavras proibidas')
}
palavraProibida(comentario)