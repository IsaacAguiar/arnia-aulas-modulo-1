const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eec229fc26msh6cebc6821591c50p1414fejsna06bb7dd0b64',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

const content = document.getElementById('content')

const buscaReceitas = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        result.results.forEach((recipe) => {
            content.innerHTML = content.innerHTML + `
            <div>
            <h1>${recipe.name}</h1>
            <img src=${recipe.thumbnail_url} width='350px'>
            <button onclick="abrirModal()">Descrição</button>
            </div>
            `
        })
    } catch (error) {
        console.error(error);
    }
}

buscaReceitas()

function abrirModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

function fecharModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}