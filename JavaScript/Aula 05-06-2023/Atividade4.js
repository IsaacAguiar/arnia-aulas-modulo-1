const io = require("../io")

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 200]

const numerosMultiplicados = numeros.map((elem) => {
    if(elem % 2 !== 0){
        const impar = elem * 3
        return impar
    } 
    if(elem % 2 !== 1){
        const par = elem * 4
        return par
    }
})

const numerosFiltrados = numerosMultiplicados.filter((elem) => {
    return elem >= 100
})

io.write(numerosMultiplicados)
io.write(numerosFiltrados)