const express = require('express') 
const app = express() 
app.listen('3000')

/*
    AULA 7: PUT
    - Usado para editar informações

    1. node 7.DELETE.js, para iniciar esse servidor aqui.

    2. Criar uma nova requisição no Insomnia "DELETE" com esse endereço aqui "localhost:3000/0101", verifique que o que quer que envie após a / será identificado como o ":identificador" como codamos abaixo no .route. Após os ":", o route considera como um parâmetro

     3. Send (Insomnia)

     4. Verificar que o imsomnia mostra o que foi passado por parâmetro na URL

     5. Nesse exemplo não excluímos nenhum dado de fato, apenas exemplificamos como enviar um parâmetro, que servirá para o delete nas aulas futuras.
     
*/

// Aqui, após os ":" na rota especificada, estamos passando um parâmetro para o endereço a ser executado o método.
app.route('/:identificador').delete((req,res) => {
    author = ""
    res.send(req.params.identificador) // Resposta para o insomnia / Aqui, para usarmos o parâmetro passado na url do método feito no ":" acima, utilizamos ".params"
})