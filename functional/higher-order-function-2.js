// curring

function precoFinal(taxa) {
    return function(preco) {
        return preco * (1 + taxa)
    }
}

const brPrecoFinal = precoFinal(0.0875)

console.log(brPrecoFinal(25.1))
console.log(brPrecoFinal(21.7))
console.log(brPrecoFinal(107.9))