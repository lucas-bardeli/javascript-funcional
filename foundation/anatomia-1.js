// Declaração da função

function sayHello() {
    console.log('Hello world!')
}

sayHello()

function sayHelloTo(name) {
    console.log(`Hello, ${name}!`)
}

sayHelloTo('Lucas')

function returnHi() {
    return 'Hi!'
}

let gretting = returnHi()
console.log(gretting)

console.log(returnHi())

function returnHiTo(name) {
    return `Hello ${name}!`
}

console.log(returnHiTo('Lucas Bardeli'))