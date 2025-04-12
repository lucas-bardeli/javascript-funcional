
const numeros = [1, 2, 3, 4, 5, 6]

const numeros2 = numeros.map(function(el) {
    return (el * 2) + 1000
})

const numeros3 = numeros.map(el => el * 2)

const numeros4 = []
for (let n of numeros) {
    numeros4.push(n * 2)
}

console.log(numeros2)
console.log(numeros3)
console.log(numeros4)