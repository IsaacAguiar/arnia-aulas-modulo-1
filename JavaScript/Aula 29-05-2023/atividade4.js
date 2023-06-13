const io = require("../io")

io.write("Escreva um número para imprimir os múltiplos de 5 menores ou igual:")
const numero = io.readInt()

let repeticoes
const i = 5

while(i <= numero){
    io.write(repeticoes)
    i = i + 5
}