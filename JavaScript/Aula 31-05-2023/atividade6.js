const io = require("../io")

io.write("Digite um número para saber se é primo")
let numero = io.readInt()

if (numero < 1){
    io.write("Esse número não é primo.")
} else {
    let total = 0
    for(let i = 1; 1 <= numero; i++){
        if(numero % i === 0){
            io.write(i)
            total++
        }
    }
    if(total == 2){
        io.write("Esse número é primo.")
    } else {
        io.write("Esse número não é primo.")
    }
}