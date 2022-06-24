const express = require('express')
const app = express()
app.listen('3000')

//middleware
app.use(express.json())


// FORMAS DIFERENTES DE USAR PARÂMETROS NAS REQUISIÇÕES:

// 1.
// Digitando no navegador "localhost:3000/?name=Muri", irá apresentar "Muri"
// Digitando no navegador "localhost:3000/?name=exemplo", irá apresentar "exemplo"
app.route('/').get((req,res) => res.send(req.query.name))

// 2. 
// Aqui passamos como parametro no navegador, qualquer coisa após a /
// exemplo: "localhost:3000/qualquer coisa até com espaço e acento"
// Apresentará: "qualquer coisa até  com espaço e acento"
app.route('/:parametro').get((req,res)=> res.send(req.params.parametro))

// 3.
// Aqui é outra forma de utilizar parametros nas requisições
app.route('/').post((req,res) => res.send(req.body))



