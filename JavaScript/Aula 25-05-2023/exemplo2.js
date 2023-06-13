const io = require("../io")

io.write("Digite o Primeiro Número:")
const primeiroNumero = io.readInt()

io.write("Digite o Segundo Número:")
const segundoNumero = io.readInt()

if (primeiroNumero > segundoNumero){
    io.write("O Primeiro Número é maior que o segundo.")
} else if (primeiroNumero === segundoNumero) {
    io.write("Os Números são iguais.")
} else {
    io.write("O Segundo Número é maior que o primeiro.")
}