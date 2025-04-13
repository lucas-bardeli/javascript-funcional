
const numeros = [1, 2, 3, 4, 5, 6]

const media = (ac, el, i, array) => {
    if (i === array.length - 1) {
        return (ac + el) / array.length
    }
    else {
        return ac + el
    }
} 

const resultado = numeros.reduce(media)

console.log(resultado)