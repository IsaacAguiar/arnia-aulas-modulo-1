const io = require("../io")

let maior = 0

for(let i = 1; i <= 10; i++){
    io.write("Escreva 10 números e descubra qual é o maior:")
    const numeros = io.readInt()

    if(numeros > maior){
        maior = numeros
    }
}

console.log("O maior é o " + maior)