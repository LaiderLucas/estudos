const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const { index } = require('./pages')
const { scrapping } = require('./scrapping')

nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
.use(express.urlencoded({ extended: true}))
.use(express.static("public"))
.get("/",index)
.post("/scrapping", scrapping)
.listen(5000)