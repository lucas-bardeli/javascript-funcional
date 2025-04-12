
const alunos = [
    { nome: 'Jake', nota: 6.4 },
    { nome: 'Susan', nota: 8.6 },
    { nome: 'Emma', nota: 9.4 },
    { nome: 'Peter', nota: 9.1},
]

const getNome = el => el.nome
const getNota = el => el.nota

console.log(alunos.map(getNome))
console.log(alunos.map(getNota))

console.log(
    alunos
        .map(getNota)
        .map(Math.ceil)
)
console.log(
    alunos
        .map(getNota)
        .map(Math.floor)
)