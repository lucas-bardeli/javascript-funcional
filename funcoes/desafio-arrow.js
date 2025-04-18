
// const potencia = base => {
//     return function (exp) {    
//         return Math.pow(base, exp)
//     } 
// }

// const potencia = base => {
//     return exp => {
//         return Math.pow(base, exp)
//     }
// }

// const potencia = base =>
//     exp => {
//         return Math.pow(base, exp)
//     } 

const potencia = base => exp => Math.pow(base, exp)

console.log(potencia(3)(4))