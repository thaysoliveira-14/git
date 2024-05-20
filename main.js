function Bovino(especie) {
    this.especie = especie
    this.descricao = function() {
        console.log(`Bovino da raca = ${this.especie}`)
    }
}

function Nelore(especie, idade, peso) {
    Bovino.call(this, especie)
    this.idade = idade
    this.peso = peso
}

function Angus(especie, idade, peso) {
    Bovino.call(this, especie)
    this.idade = idade
    this.peso = peso
}

const bovinoDaMaria = new Nelore('nelore', 12, 150)
const bovinoDoJoao = new Angus('angus', 24, 285)
const bovinoDoJose = new Nelore('nelore', 36, 300)

console.log(bovinoDaMaria)
console.log(bovinoDoJoao)
console.log(bovinoDoJose)