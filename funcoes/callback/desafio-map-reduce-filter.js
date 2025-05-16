
const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtd: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtd: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtd: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtd: 1, preco: 19.20, fragil: true },
]

const frageis = item => item.fragil
const total_qtds = item => item.qtd * item.preco

const media = (acc, el) => {
    const nova_qtd = acc.qtd + 1
    const novo_total = acc.total + el
    console.log(acc, el)

    return { 
        qtd: nova_qtd, 
        total: novo_total, 
        media: novo_total / nova_qtd
    }
} 
const media_inicial = { qtd: 0, total: 0, media: 0 }

const resultado = carrinho
    .filter(frageis)
    .map(total_qtds)
    .reduce(media, media_inicial)
    .media

console.log("A média é:", resultado)