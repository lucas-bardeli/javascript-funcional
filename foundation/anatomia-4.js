// IIFE - Immediately Invoked Function Expression

(function (a, b, c) {
    let x = 125
    console.log(`Resultado: ${a + b + c}`) 
    console.log(x)
})(1, 2, 3);

(function (a, b, c) {
    let x = 625
    console.log(`Resultado: ${a + b + c}`) 
    console.log(x)
})(1, 2, 3);

(function () {
    let x = 225
    console.log(x)
})();

(() => {
    console.log('Ola')
})();

(() => console.log('Oi'))();