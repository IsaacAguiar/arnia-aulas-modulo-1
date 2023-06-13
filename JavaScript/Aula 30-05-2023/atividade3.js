const io = require("../io")

let nomes = ""
let quantidade = 0

for(let i = 1; i <= 10; i++ ){
    io.write("Escreva 10 nomes:")
    nomes = io.read()

    if(nomes == "Isaac"){
        quantidade++
    }
}

console.log("Isaac apareceu " + quantidade + " vezes")