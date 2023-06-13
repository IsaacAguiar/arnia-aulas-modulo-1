const io = require("../io")

io.write("Escolha um número para descobrir a sua raíz quadrada:")
const numero = io.readFloat()

const resultado = numero ** (1/2)
io.write("O Resultado é: " + resultado)


io.write("")


io.write("Escreva dois numeros para descobrir o resto da divisão:")

io.write("Primeiro número:")
const numero1 = io.readFloat()
io.write("O número é: " + numero1)

io.write("Segundo número:")
const numero2 = io.readFloat()
io.write("O número é:" + numero2)


io.write("")


io.write("Agora escreva dois números:")

io.write("Primeiro Número:")
const num1 = io.readFloat()

io.write("Segundo Número:")
const num2 = io.readFloat()

const resultadoFinal = num1 % num2
io.write("O resultado é: " + resultadoFinal)


io.write("")


io.write("Escreva o valor de dois produtos para você ter o preço médio deles:")

io.write("Primeiro Produto:")
const produto1 = io.readFloat()

io.write("Segundo Produto:")
const produto2 = io.readFloat()

const mediaDePreco = (produto1 + produto2) / 2
io.write("O valor médio deles é: " + mediaDePreco)