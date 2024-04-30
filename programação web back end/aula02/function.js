/*function somar(){
    let soma = 0 
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(somar())
console.log(somar(1,2))
console.log(somar(1.1,2.2,3.3))
console.log(somar('ola','mundo'))
console.log(somar(3, 4, 'ja deu'))
*/

function soma (a , b) {
    console.log(`O valor de a é ${a}`) // é executado
    return a + b;
    console.log(`o valor de b é ${b}`) // não executavel
}
let resultado = soma(3 ,5);
console.log(resultado); //saída: 8 