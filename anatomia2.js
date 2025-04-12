// Função anônima

(function (a, b, c) {
    return a + b + c
})

// Function expression

const soma = function (a, b) {
    return a + b
}

const resultado = soma(2, 4)
console.log(resultado)

const outraSoma = soma
console.log(outraSoma(7, 49))

let x = 15
console.log(x)

x = soma
console.log(x(15, 16))