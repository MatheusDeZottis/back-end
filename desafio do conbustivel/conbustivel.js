alert("Bem vindo ao programa de calculo de conbustivel é comparação de preço")

alert("para que o programa realizer a contagem é precisso  dos seguintes dados ! \n 1. Quilômetros percorridos: \n 2. Litros de conbustivel: \n 3. Preço alcool:   \n 4. preço gasolina :")

const km = parseFloat(prompt("Qual a quantida de quilometros você rodou ?"))

const litros = parseFloat(prompt("Qual a quantidade de litros que abasteceu ?"))
const total = km / litros
const gasolina = parseFloat(prompt( "digete o valor da gasolina"))
const alcool = parseFloat(prompt( "digete o valor do etanol"))
let final;
if((gasolina / 0.7) > (alcool / 0.7)){
    final = "etanol"
} else {
    final = "gasolina"
}
  


alert(`O seu carro está fazendo ${total} km por litro`)
alert(`esta conpensando abastecer ${final}`)

document.write(`<style>body {color: red;
    text-align: center; font-size: 3em;}</style>O seu carro está fazendo ${total} km por litro <br>`)
document.write(`esta conpensando abastecer ${final}`)




