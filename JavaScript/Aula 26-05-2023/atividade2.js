const io = require("../io")

io.write("Digite um ano e descubra se ele é Bissexto:")
const anos = io.readInt()

const etapa1 = anos % 4
const etapa2 = anos % 100
const etapa3 = anos % 400

if ((etapa1 === 0 && etapa2 !== 0) || etapa3 === 0){
    io.write("Esse é um ano bissexto.")
} else {
    ("Esse não é um ano bissexto")
}