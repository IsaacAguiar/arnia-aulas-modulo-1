const io = require("../io")

let menor = 0

for(let i = 1; i <= 10; i++){
    io.write("Escreva 10 números e descubra qual é o menor:")
    const numeros = io.readInt()

    if(i === 1 && numeros < menor){
        menor = numeros
    }
}

io.write("O menor número é: " + menor)