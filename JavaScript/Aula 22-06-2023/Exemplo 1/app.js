const mostrarConteudo = (param) => {
    const content = document.getElementById('content')

    param.forEach((item) => {
        content.innerHTML = content.innerHTML + `
        <div>
            <p>${item.titulo}</p>
        </div>
        `
    })
}


const getNoticias = async () => {
    try {
        const apiResponse = await fetch('http://localhost:3000/noticias')
        const noticias = await apiResponse.json()
        console.log(noticias)
        mostrarConteudo(noticias)
    } catch (error) {
        console.error(error)
    }
}

// const getRota = async (rota) => {
//     try {
//         const apiResponse = await fetch(`http://localhost:3000/${rota}`)
//         const reportagens = await apiResponse.json()
//         mostrarConteudo(reportagens)
//     } catch (error) {
//         console.error(error)
//     }
// }