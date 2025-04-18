
function adicao(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3
        }
    } 
}

console.log(adicao(3)(4)(5))


const somar = function (num1, num2) {
    return num1 + num2
}
const subtrair = function (num1, num2) {
    return num1 - num2
}
const multiplicar = function (num1, num2) {
    return num1 * num2
}
const dividir = function (num1, num2) {
    return num1 / num2
}

function operacao(num1) {
    return function (num2) {
        return function (fn) {
            if (typeof fn === 'function'){
                return fn(num1, num2)
            }
        }
    }
}

let resultadoSoma = operacao(3)(7)(somar)
console.log(resultadoSoma)

let resultadoSub = operacao(3)(7)(subtrair)
console.log(resultadoSub)

let resultadoMult = operacao(3)(7)(multiplicar)
console.log(resultadoMult)

let resultadoDiv = operacao(3)(7)(dividir)
console.log(resultadoDiv)