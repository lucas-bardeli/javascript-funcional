
console.log(typeof Promise)

let p = new Promise(function(resolve) {
    resolve(['Janeiro', 'Fevereiro', 'Março', 'Abril'])
})

console.log(typeof p)

p.then(function(valor) {
    console.log(valor)
})

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)

    
// Com arrow function
// p
//     .then(valor => valor[0])
//     .then(primeiro => primeiro[0])
//     .then(letra => letra.toLowerCase())
//     .then(minuscula => console.log(minuscula))