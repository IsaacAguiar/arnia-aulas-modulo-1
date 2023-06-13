const io = require("../io")

const precos = [1000, 40, 340, 501, 500, 1093, 245, 21]

const precosAcimade500 = precos.map ((elem) => {
    if(elem >= 500){
        const aumento = elem * 0.15
        const soma = aumento + elem
        return soma
    } 
    
    return elem
})

io.write(precosAcimade500)