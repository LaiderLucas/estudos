const express = require('express')
const server = express()

const { index } = require('./pages')
const { scrapping } = require('./scrapping')

server
.use(express.urlencoded({ extended: true}))
.use(express.static("public"))
.get("/",index)
.post("/scrapping",scrapping)
.listen(5000)