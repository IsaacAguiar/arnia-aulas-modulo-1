const io = require("../io")

io.write("Escreva o Primeiro Número:")
const primeiroNumero = io.readInt()

io.write("")

io.write("Escreva o Segundo Número:")
const segundoNumero = io.readInt()

io.write("")

if(primeiroNumero > segundoNumero){
    io.write("O Primeiro Número é o maior.")
} else if (primeiroNumero < segundoNumero){
    io.write("O Segundo Número é maior.")
} else {
    io.write("Ambos números são iguais.")
}