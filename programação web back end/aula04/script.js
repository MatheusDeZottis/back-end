const http = require('http');
const host = 'localhost';
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
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(resposta);
};

const server = http.createServer(requestListener);

server.listen(port, host, () =>{
    console.log(`Servidor rodando em http://${host}:${port}/`);
});
