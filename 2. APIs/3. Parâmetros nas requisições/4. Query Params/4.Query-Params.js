const express = require('express')
const app = express()
app.listen('3000')
app.use(express.json()) //middleware

/*
    1. No Insomnia, enviar um GET com a seguinte url e parâmetros: 
    "localhost:3000?nome=murilo&city=saint joseph"

    Isso irá resultar em uma response do servidor no imsomnia em JSON exatamente assim:

    {
    "nome": "murilo",
    "city": "saint joseph"
    }

*/

// Query params
app.route('/').get((req,res) => {
    res.send(req.query) // req.query é o que foi enviado na url da requisição, aqui está sendo acessado.

//  res.send(req.query.nome) // Apresentaria somente o nome enviado no query, caso exista "nome" no query.
})


// 3. Query Params em diretório específico
app.route('/about/user').get((req,res) => res.send(req.query))

// Diretório específico com propriedade específica
// app.route('/about/user').get((req,res) => res.send(req.query.nome))