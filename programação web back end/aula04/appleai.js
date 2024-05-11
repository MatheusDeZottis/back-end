const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end('Olá mundo!\n')
})

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
