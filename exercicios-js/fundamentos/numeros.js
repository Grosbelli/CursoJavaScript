const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInterger(peso1))
console.log(Number.isInterger(peso2))


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))  // escolher quantas casas decimais
console.log(media.toString(2))   //transformar em binário, tirou o núhmero '2", ele transforma o número em uma string. 
console.log(typeof media)
