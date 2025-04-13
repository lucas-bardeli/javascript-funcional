
const numeros = [1, 2, 3, 4, 5, 6]

const soma = (total, el) => total + el

const total = numeros.reduce(soma, 100)

console.log(total)