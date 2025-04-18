
const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 7.99 },
    { nome: 'Impressora', qtd: 0, preco: 649.50 },
    { nome: 'Caderno', qtd: 4, preco: 27.10 },
    { nome: 'Lapis', qtd: 3, preco: 5.82 },
    { nome: 'Tesoura', qtd: 1, preco: 19.20 },
]

const getNome = item => item.nome
const qtdMaiorQueZero = item => item.qtd > 0
const qtdMuitoGrande = item => item.qtd >= 1000

const itensValidos = carrinho.filter(qtdMaiorQueZero)
console.log(itensValidos)

const nomesItensValidos = carrinho
    .filter(qtdMaiorQueZero)
    .map(getNome)

console.log(nomesItensValidos)

const itensGrandes = carrinho.filter(qtdMuitoGrande)
console.log(itensGrandes)   