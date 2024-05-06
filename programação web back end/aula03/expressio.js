/* utilizando-se das expressões de função, faça um programa que calcule a area de  circulo (dica: const pi = Math.PI )  */

let circulo = function() {
    let radio = 5
    let area = Math.PI * radio * radio
    return area
}

let resultado = circulo()

console.log(resultado)
