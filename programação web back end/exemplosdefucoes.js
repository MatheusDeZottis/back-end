/* exemplos de função em javaScript */

let soma = 0;

for (let i = 1; i <= 100; i++) {
    soma += i;
    
  }
  console.log("A soma dos números de 1 a 100 é: " + soma);
  
let i = 0, soma2 = 0
while (i <=0) {
    soma2 += 1
    i++
}
console.log(soma2)


const lista = []
for (let i=0; i<=100;i++) {
    lista.push(i)

}
console.log(lista)



for (i in lista) {
    soma3 += parseInt(i)
}
console.log(soma3)

lista.forEach() // forEach recebe uma funçao
console.log(soma4)