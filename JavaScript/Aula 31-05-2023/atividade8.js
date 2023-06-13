const io = require("../io")

let num1 = 1 
let num2 = 1

for(let i = 1; i <= 50; i ++){
    const proxNum = num1 + num2
    io.write(proxNum)

    num1 = num2
    num2 = proxNum
}