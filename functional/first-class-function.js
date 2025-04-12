// Quando uma linguagem de programação permite
// armazerar uma função dentro de uma variável
// ela suporta o conceito First-class function

const adicao = function(a, b) {
    return a + b
}

const subtracao = function(a, b) {
    return a - b 
}

const multiplicacao = (x, y) => x * y

const divisao = (x, y) => x / y

console.log(adicao(5, 5))
console.log(subtracao(5, 5))
console.log(multiplicacao(5, 5))
console.log(divisao(5, 5))