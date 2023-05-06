// parte 1
const exercicio1 =  (5 > 20 && 5 < 2)
console.log(exercicio1)

// Parte 2

let salario = Number(2000)

let creche = Number(91)

const comicao =Number(0.1)
 
const inss = Number (0.05)


console.log("Salario fixo + auxilio cheche", salario + creche)

let vendasJaneiro = Number(5784.50)
let vendasFevereiro = Number(3418.41)
let vendasMarco = Number(4124.10)
let vendasAbril = Number(1874)
let vendasMaio = Number(7000)
let vendasJunho = Number(9450)
let vendas1Semestre = vendasJaneiro + vendasFevereiro + vendasMarco + vendasAbril + vendasMaio + vendasJunho

console.log("A comição de Fulano da Silva sera de", vendasJaneiro * comicao)
console.log("comição 1 semestre", vendas1Semestre * comicao)
console.log("Desconto INSS Janeiro:", ((vendasJaneiro * comicao) + salario) * inss )
console.log("Salario de todos os meses:", ((salario * 6) + (vendas1Semestre * comicao)) - inss )
console.log("Media salarial do semestre",(((salario * 6) + (vendas1Semestre * comicao ) -inss) + creche * 2) / 6 )
