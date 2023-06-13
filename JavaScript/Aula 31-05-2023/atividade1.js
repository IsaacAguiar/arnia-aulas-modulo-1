const io = require("../io")

let login = "Isaac"
let senha = "123456"

io.write("Digite seu Login:")
const login2 = io.read()

io.write("Digite sua Senha:")
const senha2 = io.read()

if((login == login2) && (senha == senha2)){
    io.write("Bem Vindo ao sistema.")
} else {
    io.write("Dados Inválidos.")
}