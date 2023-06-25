const formulario = document.getElementById('formulario')


const cadastrarLivro = async (livro) => {
    try {
        await fetch('http://localhost:3000/livros', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(livro)
        })
        window.location = 'index.html'
    } catch (error) {
        console.error(error)
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const ano = formulario.elements['ano'].value

    console.log(titulo)

    const livro = {
        titulo: titulo,
        autor: autor,
        ano: ano
    }

    cadastrarLivro(livro)
})