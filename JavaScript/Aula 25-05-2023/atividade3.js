const io = require("../io")

io.write("Informe o número de 3 tamanhos de segmentos de reta. Lembrando que a primeira tem que ser maior que a soma das outras duas para se formar um triângulo.")

io.write("")

io.write("Primeira Reta:")
const primeiraReta = io.readInt()

io.write("Segunda Reta:")
const segundaReta = io.readInt()

io.write("Terceira Reta:")
const terceiraReta = io.readInt()

io.write("")

if (primeiraReta > (segundaReta + terceiraReta)){
    io.write("Se formou um triângulo.")
} else {
    io.write("Não se formou por ser menor.")
}