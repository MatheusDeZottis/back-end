const http = require('http');
const host = 'localhost';
const port = 3000;

const requestListener = function(req, res) {
    console.log("Chegou uma requisição");
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Olá mundo!\n');
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}/`);
});
