const io = require("../io")

io.write("Digite um Número:")
const numero = io.read()

if (numero % 2 == 0) {
    io.write("Esse número é par.")
} else if (numero == 0){
    io.write("Esse número é zero.")
} else {
    io.write("Esse número é ímpar")
}