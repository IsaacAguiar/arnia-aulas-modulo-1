const io = require("../io")

for(let i = 1; i <= 5; i++){
    io.write("Digite 5 numeros inteiros")
    const numero = io.readInt()

    if(numero % i === 0){
        io.write("Os divisores são: " + numero)
    }
}