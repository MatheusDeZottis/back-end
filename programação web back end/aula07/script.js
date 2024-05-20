const http = require("http")

const host = "localhost"
const port = 3000;
const resposta = `Minha Pagina`

const rotaTeste = function (method, res) {
  res.end('Este é um teste')
};

const rotaProfessor = function (method, res) {
  res.end("Este é um professor")
};

const rotaAluno = function (method, res) {
  return res.end('Este é um aluno')
};

const routes = function (url, method, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  
    if (url == "/teste") {
    return rotaTeste(method, res)
  } else if (url == "/professor") {
    rotaProfessor(method, res)
  } else if (url == "/aluno") {
    rotaAluno(method, res)
  } else {
    res.end("Ola mundo")
  }
};
const requestListener = function (req, res) {
  const { method, url } = req
  console.log(`chegou uma requisicao no backend no path ${url}`)

  routes(url, method, res)
};

const server = http.createServer()
server.on("request", requestListener)

server.listen(port, host, () => {
  console.log(`Servidor rodando em http://${host}:${port}/`)
})