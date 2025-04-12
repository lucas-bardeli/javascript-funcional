
const numeros = [1, 2, 3, 4, 5, 6]

const maiorZero = el => el > 0

const maiorDez = el => el > 10

const pares = el => el % 2 == 0

console.log(numeros.filter(el => el > 0))
console.log(numeros.filter(maiorZero))

console.log(numeros.filter(maiorDez))

console.log(numeros.filter(pares))