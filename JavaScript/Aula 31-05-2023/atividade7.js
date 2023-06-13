const io = require("../io")

io.write("Digite se a sua compra será a Vista ou a Prazo")
const codigo = io.read()

if(codigo != "P" && codigo != "V"){
    io.write("Código Inválido.")
} else {
    let total = 0
    for(let i = 0; i < 5; i++){
        io.write("Digite um valor da transação:")
        const valor = io.readFloat()
        total = total + valor
    } 
    if(codigo == "V"){
        io.write("O Valor total a vista é: R$" + total)
    } 
    if(codigo == "P"){
        const parcelar = total / 5
        io.write("O Valor de cada prestação é de R$" + parcelar)
    }
}