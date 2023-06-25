const mostrarNoticia = (parametro) => {
    const content = document.getElementById('content')

    parametro.forEach(element => {
        content.innerHTML = content.innerHTML + `
        <div class="noticias">
            <div>
                <img class="imagens" src=${element.imagem}>
            </div>
            <div>
                <h1 class="titulos">${element.titulo}</h1>
                <p class="textos">${element.texto}</p>
            </div>
        </div>
        `
    });
}

const mostrarNoticias = async () => {
    try{
        const apiResponse = await fetch('http://localhost:3000/noticias')
        const noticias = await apiResponse.json()
        console.log(noticias)
        mostrarNoticia(noticias)
    } catch(error){
        console.error(error)
    }
}

const novaNoticia = () => {
    window.location = "cadastro.html"
}