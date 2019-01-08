const escola = "Cod3r"

console.log(escola.charAt(4)) //aquele ele busca a letra do indice que procuras. Começando sempre do zero, nesse caso o número 4, representa o indice 5
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //pegar o valor dele na tabela ASC
console.log(escola.indexOf('3')) //quando você quer saber em qual indice está aquela "letra/valor".

console.log(escola.substring(1)) //ele vai a partir do indice 1 pra frente. 
console.log(escola.substring(0, 3)) //de onde ele começa, até onde ele termina. Passando o indice entre paranteses. Detalhe, ele não inclui o último indice do parenteses, vai até ele apenas.

console.log('Escola '.concat(escola).concat("!")) //Isso é uma forma de concatenar. 
console.log('Escola ' + escola + "!") //Outra forma de concatenar.

console.log(escola.replace(3, 'e')) //substituir o valor do indice.

console.log('Ana,Maria,Pedro'.split(',')) //ele gerou um array, pegando o valor inteiro até a vírgula e colocando em um espaço, e assim por diante.
