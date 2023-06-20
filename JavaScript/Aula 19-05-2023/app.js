const timestamp = (new Date()).getTime()
const publicKey = 'f93ef625e36015de798240ed77a7715e'
const privateKey = 'af53fa036a250ee570392ddd088893c0b4d2a46b'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)


promise
  .then(response => {
    console.log('Response fetch, em JSON:', response)
    
    let content = document.getElementById('content')
    content.innerHTML = content.innerHTML + '<ul>'

    response.json()
      .then(res => {
        console.log('Response do parse do JSON:', res)

        res.data.results.forEach(elemento => {
          content.innerHTML = content.innerHTML + 
          `<li>
            <img class="imagem" src="${elemento.thumbnail.path}.${elemento.thumbnail.extension}">
            ${elemento.name}
          </li>` 
        })       
        content.innerHTML = content.innerHTML + '</ul>'
      })

})
  .catch(error => {
    console.log('Erro: ' + error)
})