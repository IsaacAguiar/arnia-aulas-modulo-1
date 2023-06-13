const io = require("../io")

let soma = 0
let contador = 0

for(let i = 1; i <= 5; i++){
    io.write("Digite um número real maiour ou igual a zero:")
    const numeros = io.readInt()
    contador = contador + numeros
    soma = soma + numeros
}

io.write("")
const media = soma / 5
io.write("Foram colocados: " + contador + " números")
io.write(media)