/* Crie uma expressão de função que calcule corretamnete a idade de uma  pessoa dada a data de aniversario sendo a string "dd/mm/yyy" (d=dia com 2digitos , M=me com 2 digitos, y=ano com 4 digitos ) */

const idade = function(data) {
    const hoje = new Date()
    const [dia, mes, ano] = data.split("/")
    
    let idade = hoje.getFullYear() - parseInt(ano)
    if (hoje.getMonth() < parseInt(mes) - 1) {
        return idade - 1
    } else if (hoje.getMonth() === (parseInt(mes) - 1)) {
        if (hoje.getDate() < parseInt(dia)) {
            return idade - 1
        }
    }
    return idade
}

console.log(idade('24/11/1999'))
