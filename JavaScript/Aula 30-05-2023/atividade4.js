const io = require("../io")

io.write("Escreva um número para você ver os antecedentes dele:")
let numero = io.readInt()

io.write("")

for(let i = 1; i <= numero; i++){
    io.write(i)
}