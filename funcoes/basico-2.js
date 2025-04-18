
function bomDia() {
    console.log('Bom dia!')
}

const boaTarde = function () {
    console.log('Boa tarde!')
}

// Passar uma função como paramêtro para outra função
function qualquerCoisa(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

qualquerCoisa(3) 

qualquerCoisa(bomDia)

qualquerCoisa(boaTarde)

// Retornar uma função a partir de outra 
function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const resultado = potencia(3)(4)
console.log(resultado)