const express = require('express')
const { listagemCarros, obterCarro, } = require('./controladores/carros') // importação do controlador
const { validarSenha } = require('./intermediarios')

const app = express()

app.use(validarSenha)

app.get('/carros', listagemCarros) // rota para listagem geral do array de carros
app.get('/carros/:id', obterCarro) // rota para encontrar um carro pelo seu identificador

app.listen(3000)