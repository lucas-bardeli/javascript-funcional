
const alunos = [
    { nome: 'Jake', nota: 6.4 },
    { nome: 'Susan', nota: 8.6 },
    { nome: 'Emma', nota: 9.4 },
    { nome: 'Peter', nota: 9.1},
]

const melhorAluno = aluno => aluno.nota >= 9

console.log(alunos.filter(melhorAluno))