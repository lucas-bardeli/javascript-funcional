// Quando a linguagem permite que uma função 
// opere usando outras funções.
// Pode passar uma função como argumento para outra função,
// como também pode retornar uma função a partir de outra. 

function run(fn) {
    return `Resultado: ${fn()}`
}

function sayHello() {
    console.log('Hello!')
}

run(sayHello)

run(function() {
    console.log('Run!')
})

const resultado = run(Math.random)
console.log(resultado)