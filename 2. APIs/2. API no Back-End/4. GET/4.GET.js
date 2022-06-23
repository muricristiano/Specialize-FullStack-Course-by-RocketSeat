const express = require('express') 
const app = express() 
app.listen('3000')

// AULA 4. GET

/*
# Criando um conteúdo no servidor!

Nesse momento, quando acessamos pelo navegador o localhost:3000 com o server inicializado, ele só apresenta "Cannot GET", pois por padrão o navegador só pega a rota GET de uma web app. Como não implementamos, ele só apresentará como "Cannot GET".

Aqui criaremos a rota GET para que podemos mudar a apresentação desse acesso inicial pelo navegador.
*/

// .route é uma função do express que trabalha com rotas. Rotas são o caminhos/diretórios/páginas que o site vai fazer. Exemplo: localhost:3000/sobre, é aqui que criaremos as rotas das páginas

// Dentro da função route(), passaremos por string, a "/" sozinha como sendo a página principal, pois todo navegador esconde a / após o domínio principal.

// Para todas as outras, fazemos por exemplo como está abaixo /sobre

// Após definição da rota, fazemos um .get passando (req,res), e aqui nesse exemplo já estamos utilizando a função .send no res e executando uma mensagem para enviar para o navegador.

// req = requisição  (para o servidor receber dados)
// res = resposta (para o servidor entregar dados)
app.route('/').get((req,res) => res.send("hello"))

app.route('/sobre').get((req,res) => res.send("sobre"))

// Agora acessando localhost:3000/sobre, exibirá a mensagem acima "sobre"