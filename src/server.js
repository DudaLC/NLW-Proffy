//servidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')


//configurar nunjucks (template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

//Início e configuração do servidor
server
//configurar scripts estáticos (css, scripts, imagens)
.use(express.urlencoded({ extended: true}))
server.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)

//Para abrir o servidor: terminal > node src/server.js
//Toda vez que houver alterações eu preciso reiniciar o servidor
