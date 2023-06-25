const voltar = () => {
    window.location = "index.html"
}

const formulario = document.getElementById('formulario')

const cadastrarNoticia = async (noticia) => {
    try {
        await fetch('http://localhost:3000/noticias', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(noticia)
        })
        window.location = 'index.html'
    } catch (error) {
        console.error(error)
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const titulo = formulario.elements['titulo'].value
    const destaque = formulario.elements['destaque'].value
    const texto = formulario.elements['texto'].value 

    const noticia = {
        titulo: titulo,
        destaque: destaque,
        texto: texto
    }

    cadastrarNoticia(noticia)
})