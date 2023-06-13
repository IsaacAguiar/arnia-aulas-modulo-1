const io = require("../io")

let somaDasAlturas = 0
let maiorIdade = 0

for(let i = 1; i <= 5; i++){
    io.write("Escreva 5 idades e 5 alturas de pessoas diferentes")
    const idades = io.readInt()
    const alturas = io.readFloat()

    if(idades > maiorIdade){
        maiorIdade = idades
    }

    somaDasAlturas = somaDasAlturas + alturas
}

io.write("A média é: " + (somaDasAlturas / 5))
io.write("A maior idade é: " + maiorIdade)