const express = require('express') 
const app = express() 
app.listen('3000')



// AULA 5. POST

/* 
    1. Em INSOMNIA: criar método POST, com endereço "localhost:3000"

    2. Alterar o tipo de requisição para JSON e inserir o seguinte:

    {
        "content": "Murilo Ribeiro Cristiano"
    }

    3. Em arquivo index.js, inserir as seguintes linhas:

    // middleware, é a ponte das requisições
    // (.use), nesse exemplo estamos transformando tudo em json, que será executado antes do .post
    app.use(express.json())

    // .post
    app.route('/').post((req,res) => res.send(req.body))

    3. Iniciar o server pelo node no terminal e deixar aberto. (node index.js)

    4. Enviar pelo Insomnia (SEND), a requisição

    5. Observar


DESCRIÇÃO DO PROCESSO POR TRÁS DOS PANOS:

// 1. Insomnia irá buscar pela rota que foi passada, exemplo: "/", vulgo: "localhost:3000/"
// 2. Irá pegar o primeiro método que foi indicado nessa mesma rota também, exemplo: "".post" (No Insomnia: POST)
// 3. Antes de executar o que está dentro dessa linha do arquivo .js que contém o "/" e ".post" correspondente a requisição criada no Insomnia, ele irá pegar o conteúdo que ele está trazendo da requisição "req", e vai passar pelo middleware, e executar o que for codado ali
// 4. Executará o middleware
// 5. Após executar o que existe no middleware (nesse exemplo: .use), e então após ele irá executar o que está no  "".route(/) ...  .post"

*/

// middleware, é a ponte das requisições
// (.use), nesse exemplo estamos transformando tudo em json, que será executado antes do .post
app.use(express.json())

// .post exemplo para mostrar o conteúdo passado no insomnia no console do terminal, o Insomnia ficaria rodando até cancelarmos
app.route('/').post((req,res) => console.log(req.body))

// .post exemplo para retornar a resposta no próprio Insomnia, basta comentar o .route.post de cima e descomentar esse abaixo:
//app.route('/').post((req,res) => res.send(req.body))