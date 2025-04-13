
const alunos = [
    { nome: 'Jake', nota: 6.4 },
    { nome: 'Susan', nota: 8.6 },
    { nome: 'Emma', nota: 9.4 },
    { nome: 'Peter', nota: 9.1},
]

const melhorAluno = aluno => aluno.nota >= 9

const getNota = el => el.nota

const media = (ac, el, i, array) => {
    if (i === array.length - 1) {
        return (ac + el) / array.length
    }
    else {
        return ac + el
    }
} 

console.log(
    alunos
        .filter(melhorAluno)
        .map(getNota)
        .reduce(media)
)