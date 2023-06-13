const io = require("../io")

io.write("Escreva o número total de eleitores:")
const totalDeEleitores = io.readInt()

io.write("Escreva o número de votos brancos:")
const votosBrancos = io.readInt()

io.write("Escreva o número de votos nulos:")
const votosNulos = io.readInt()

io.write("Escreva o número de votos válidos:")
const votosValidos = io.readInt()

io.write("")

const porcentagemDeVotosBrancos = (votosBrancos * 100) / totalDeEleitores
const porcentagemDeVotosNulos = (votosNulos * 100) / totalDeEleitores
const porcentagemDeVotosValidos = (votosValidos * 100) / totalDeEleitores

io.write("O número de votos brancos representa em relação ao total de eleitores: " + porcentagemDeVotosBrancos + "%")
io.write("O número de votos nulos representa em relação ao total de eleitores: " + porcentagemDeVotosNulos + "%")
io.write("O número de votos válidos representa em relação ao total de eleitores: " + porcentagemDeVotosValidos + "%")