const http = require('http');
const { url } = require('inspector');
const host = 'localhost'
const port = 3000;
const botao = 'console.log("to no front")'

const resposta = `
<html>
<head>
    <title>Exemplo Client-Side</title>
</head>
<body>
    <button id="meuBotao">Clique Aqui</button>
    <script>${botao}</script>
</body>
</html>`;

const requestListener = function (req, res) {
    console.log("Chegou uma request!");
    if (requestUrl.pathname === '/teste') {
        console.log('Este é um teste');
    } else if (requestUrl.pathname === '/professor') {
        console.log('Este é um professor');
    } else if (requestUrl.pathname === '/aluno') {
        console.log('Este é um aluno');
    } else {
        console.log('Rota não encontrada');
    }
    
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(resposta);
};

const server = http.createServer(requestListener);

server.listen(port, host, () =>{
    console.log(`Servidor rodando em http://${host}:${port}/`);
});
