
const incremento1 = function(n) {
    return n + 1
}

// Função arrow é sempre anônima

const incremento2 = (n) => {
    return n + 1
}

const incremento3 = n => {
    return n + 1
}

const incremento4 = n => n + 1

console.log(incremento1(1))
console.log(incremento2(9))
console.log(incremento3(19))
console.log(incremento3(29))

const soma = (a, b) => a + b
console.log(soma(4, 7))