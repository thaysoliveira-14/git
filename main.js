const alunos = [
    {nome: 'Alice', nota: 8.5},
    {nome: 'Felipe', nota: 5.9},
    {nome: 'Luna', nota: 5},
    {nome: 'Pedro', nota: 10},
    {nome: 'Madalena', nota: 6}
]

const alunosAprovados = alunos.filter((aluno) =>
    {
        if (aluno.nota >= 6) {
            return aluno
        }
    }
)

console.log(alunosAprovados)

