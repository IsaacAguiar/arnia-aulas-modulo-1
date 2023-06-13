const io = require("../io")

io.write("Escreva o seu salário atual:")
const salarioAtual = io.readFloat()

io.write("Escreva o valor do reajuste do seu salário:")
const reajuste = io.readFloat()

io.write("")

const convertendoReajuste = reajuste / 100
const resultado = salarioAtual * convertendoReajuste

io.write("O aumento do novo salário é de: " + resultado)