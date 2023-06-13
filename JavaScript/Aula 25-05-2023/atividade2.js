const io = require("../io")

io.write("Escreva dois produtos para saber qual é  maior que 10:")

io.write("")

io.write("Escreva o Primeiro Produto:")
const primeiroNumero = io.readInt()

io.write("")

io.write("Escreva o Segundo Produto:")
const segundoNumero = io.readInt()

io.write("")

if (primeiroNumero > 10){
    io.write("O primeiro produto é maior que 10.")
} else if (primeiroNumero < 10){
    io.write("O primeiro produto é menor que 10.")
} else {
    io.write("O primeiro produto tem o mesmo valor de 10.")
}

io.write("")

if (segundoNumero > 10){
    io.write("O segundo produto é maior que 10.")
} else if (segundoNumero < 10){
    io.write("O segundo produto é menor que 10.")
} else {
    io.write("O segundo produto tem o mesmo valor de 10.")
}