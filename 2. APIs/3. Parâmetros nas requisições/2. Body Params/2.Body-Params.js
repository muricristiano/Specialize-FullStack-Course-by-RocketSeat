const express = require('express')
const app = express()
app.listen('3000')

//middleware (toda vez que formos fazer alterações) post/put/patch
app.use(express.json())

// Tipo de requisição body é uma forma de enviar informações pra API, e estas não ficaram na URL, serão enviadas de uma forma escondida.

// Nesse exercício enviaremos pelo Insomnia o BODY da requisition, é o que é enviado para o servidor. Quando colocamos conteúdo dentro do JSON/BODY para enviar para o servidor no Insomnia, mesmo sendo get ou put, é o body da requisition. Podemos apresentar esse dado de volta, aqui no código mesmo.


/*
    Em Insomnia, criar uma requisição GET para a url localhost:3000, e com requisição do tipo JSON, preencher a requisição com os seguintes dados de exemplo:

{
	"nome": "Murilinho",
	"city": "Saint Joseph",
	"books": [
		"Power of Silence",
		"The Will Power"
	]
}

*/

// Aqui fazemos um get, e, pegamos a própria requisição enviada pelo insomnia para ser exibida tanto no console.log quanto na response do Insomnia.
app.route('/').get((req,res) => {
    res.send(req.body)
    console.log(req.body);
    console.log(req.body.name) // Apresentando uma propriedade mais específica.

    // BÔNUS
    const {name, city, books} = req.body // É uma forma de criar constantes que atribuem automaticamente os dados que se identifiquem com o mesmo nome dentro da requisição do body. Podemos assim, utilizar essas constantes com os valores adquiridos do body a requisição. Exemplo abaixo:
    console.log(`My name is ${name}, I live in ${city} and I've been reading books like ${books[0]}, ${books[1]} and ${books[2]}`)
})
