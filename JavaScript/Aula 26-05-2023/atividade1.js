const io = require("../io")

io.write("Informe a quantos anos você fuma:")
const anos = io.readInt()

io.write("Informe o número de cigarros consumidos por dia:")
const cigarros = io.readInt()

io.write("Informe o preço do maço de cigarro:")
const preco = io.readInt()

const conversaoEmDias = anos * 365
const consumoCigarros = conversaoEmDias * cigarros
const quantidadeConsumidaDeMacos = consumoCigarros / 20
const valorPagoEmMacos = quantidadeConsumidaDeMacos * preco

io.write("")

io.write("Você fuma a " + conversaoEmDias + " Dias.")
io.write("Você fuma " + consumoCigarros + " por Dia.")
io.write("Você consumiu " + quantidadeConsumidaDeMacos + " em Maços de Cigarros.")
io.write("Você pagou " + valorPagoEmMacos + " reais em Maços de Cigarros.")