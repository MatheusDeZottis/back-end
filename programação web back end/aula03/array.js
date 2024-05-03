/*  escreva uma função que recebe um array de números como parâmetro e retorne a soma de todos elementos do array */

function somaArray(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    return soma
}


const numeros = [1, 2, 3, 4, 5]
console.log(somaArray(numeros))
