const express = require('express') 
const app = express() 
app.listen('3000')

/*
    AULA 6: PUT
    - Usado para editar informações

    1. node 6.PUT.js, para iniciar esse servidor aqui.

    2. Criar uma nova requisição no Insomnia "PUT" com esse endereço aqui "localhost:3000" e as rotas daqui, cujo são "/", contendo como tipo JSON as possíveis e seguintes informações:
     {
        "author": "Nome quer quiser rodar para alterar a propriedade author"
     }
     Podendo ali adicionar qualquer nome para exemplificar a edição da propriedade author que começa com "Muri", como podemos ver abaixo a let author sendo criada.

     3. Send (Insomnia)

     4. Verificar que o imsomnia já mostra a resposta da alteração feita sobre o 
     
*/

//middleware (para manipulação de arquivos json)
app.use(express.json())

let author = "Muri" // Valor inicial da propriedade que estamos criando.

// GET para verificar qual é o valor da variável acima "author"
app.route('/').get((req, res) => {
    res.send(author) // Apresenta o resultado no insomnia
    console.log(author); // Apresenta o resultado no console.
})

// PUT para editar o valor da variável acima utilizando o que quer que enviemos via PUT no insomnia
app.route('/').put((req,res) => {
    author = req.body.author // Variável let recebe, o conteúdo da propriedade author do arquivo json.
    res.send('PUT realizado, valor de author alterado.'); // Para encerrar o request do insomnia.
})

// Podemos ficar passando PUT via JSON, para editar a propriedade author, e consultando em seguida com o GET para mostrar tanto no console quanto no insomnia, qual o novo valor da let author após cada put que fizermos.