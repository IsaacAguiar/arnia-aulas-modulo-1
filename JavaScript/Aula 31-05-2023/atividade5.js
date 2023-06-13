const io = require("../io")

io.write("Escreva um número natural para descobrir quantos divisores ele possui:")
const numero = io.readInt()

let contador = 0

for(let i = 1; i <= numero; i++){
    if(numero % i === 0){
    io.write(i)    
    contador = contador + 1
    }
}

io.write("O número " + numero + " possui um total de " + contador + " divisores")