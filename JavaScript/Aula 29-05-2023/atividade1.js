const io = require('../io')

io.write("Digite uma frase para ver ela diversas vezes:")
let frase = io.read()

io.write("Quantidade de vezes para repetição:")
let quantidade = io.read()

let contador = 1 

while(contador == quantidade){
    io.write(frase)
    contador = contador + 1
}