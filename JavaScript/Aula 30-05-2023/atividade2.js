const io = require("../io")

io.write("Escreva um número para repetir o nome:")
let quantidade = io.read()

io.write("")

const nome = "Isaac"

for(let n = 1; n <= quantidade; n++){   
    io.write(nome)
}