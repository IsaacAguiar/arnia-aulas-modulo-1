const io = require("../io")

io.write("Escolha um número para você ver os números pares antecessor a ele:")
let numero = io.readInt()

io.write("")

for(let i = 0; i < numero; i = i + 2){
    io.write(i)
}