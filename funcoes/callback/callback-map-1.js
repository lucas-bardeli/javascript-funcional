
const nums = [1, 2, 3, 4, 5]

const dobro = n => n * 2

console.log(nums.map(dobro))

// Segundo paramêtro Índice
const dobroMaisI = (n, i) => n * 2 + i

console.log(nums.map(dobroMaisI))

// Terceiro parâmetro Array
const dobroMaisA = (n, i, a) => n * 2 + i + a.length

console.log(nums.map(dobroMaisA))   