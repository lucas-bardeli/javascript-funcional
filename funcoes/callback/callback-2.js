
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

console.log(__dirname)

function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString())
}

console.log('Início')
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim')

console.log('Início Sync')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync')