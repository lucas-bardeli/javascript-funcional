
// Função arrow
const boaNoite = () => console.log('Boa noite!')

boaNoite()

const saudacao = nome => `Fala ${nome} !` // ou "Fala " + nome + "!"

console.log(saudacao('Lucas'))

const somar = (...numeros) => {
    console.log(Array.isArray(numeros))

    let total = 0 
    for (let n of numeros) {
        total += n
    }

    return total
}

const subtrair = (a, b) => a - b
console.log(subtrair(4, 1))

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6, 7))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// this
Array.prototype.log = function() {
    console.log(this)
}

Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = () => {
    console.log(this[0])
}

Array.prototype.primeiro = () => { // undefined
    console.log(this[0])
}

const numeros = [1, 2, 3]
numeros.log()
numeros.ultimo()
numeros.primeiro()