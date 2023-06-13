const io = require("../io")

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const numerosImpares = numeros.filter((elem) => {
    return elem % 2 !== 0 
})

io.write(numerosImpares)

const somaDosNumeros = numerosImpares.reduce((acumulador, item) => {
    return acumulador + item
}, 0)

io.write(somaDosNumeros)

const repeticoes = "JavaScript é muito bom."

for(let i = 1; i <= somaDosNumeros; i++){
    io.write(repeticoes)
}