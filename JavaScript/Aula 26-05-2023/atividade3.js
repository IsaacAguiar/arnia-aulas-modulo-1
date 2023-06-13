const io = require("../io")

io.write("Escreva o valor de 3 retas e descubra se elas forma um triângulo.")

io.write("")

io.write("Primeira Reta:")
const primeiraReta = io.read()

io.write("Segunda Reta:")
const segundaReta = io.read()

io.write("Terceira Reta:")
const terceiraReta = io.read()

io.write("")

if (primeiraReta < (segundaReta + terceiraReta) && segundaReta < (primeiraReta + terceiraReta) && terceiraReta < (primeiraReta + segundaReta)){
    io.write("Formou um triângulo.")
} else {
    io.write("Não formou um triângulo.")
}