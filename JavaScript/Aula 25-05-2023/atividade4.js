const io = require ("../io")

io.write("Informe os valores de uma equação de segundo grau:")
io.write("")

io.write("a:")
const a = io.readInt()

io.write("b:")
const b = io.readInt()

io.write("c:")
const c = io.readInt()

const delta = (b ** 2) - (4 * a * c)

io.write("")

if (delta < 0){ 
    io.write("Não existem raízes reais para essa equação.")
} else {
    if  (delta >= 0) {
        const raiz1 = (-b + (delta ** (1 / 2))) / (2 * a)
        io.write("A primeira raíz é: " + raiz1)
    } if (delta > 0) {
        const raiz2= (-b - (delta ** (1 / 2))) / (2 * a)
        io.write("A segunda raíz é: " + raiz2)
    }
}