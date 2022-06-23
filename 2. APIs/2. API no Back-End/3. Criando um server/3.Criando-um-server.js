/*
    Daremos start na nossa aplicação web com o Express

1. Criar um arquivo index.js, dentro da pasta onde importaremos o package.json

2. Codar o index.js para o Node executar e criar uma web app

3. Instalar o express no projeto no local do index.js com npm i express

3. Importar as dependencias pelo terminal com o comando "npm init -y" no mesmo local do index.js
*/


//  Conteúdo inicial de 3 linhas do index.js abaixo:

// importando o express para utilizarmos o framework
const express = require('express') 


// inicializando a constante atribuida anteriormente na linha acima
const app = express() 


// Agora para utilizar o express basta utilizar os métodos do express pela const app, podemos digitar abaixo "app." e podemos explorar pelo tab todas as funções disponíveis do express

// Aqui iniciará o servidor quando executarmos "node index.js" desse arquivo. E é só deixar o  terminal aberto após a execução.
app.listen('3000')


// 4. Basta acessarmos agora: localhost:3000 no navegador e vermos que já está sendo encontrado a página ("Cannot get"), resta implementar.

