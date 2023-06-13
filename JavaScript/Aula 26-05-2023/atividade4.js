const io = require("../io")

io.write("Escreva a sua idade em anos:")
const anos = io.read()

const anosParaDias = anos * 365
const mesesParaDias = (anos * 12) * 30

io.write("")

io.write("Convertendo anos para dia dá: " + anosParaDias)
io.write("Convertendo meses para dias dá: " + mesesParaDias)