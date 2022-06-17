/* 
    Para entender melhor o Callback e o Assincronismo no JS
*/

// Criando uma constante https, importaremos do Node o package já existente nativo 'https'
const https = require('https')

// Aqui criaremos uma constante que chamaremos de API, que receberá uma string, que é mais precisamente uma URL, e isso se chama Fetch (Fetch é ir até o endereço da URL para buscar um resultado), que nesse exemplo aqui irá retornar um arquivo json, com usuário exemplos (limite de 2).
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'


// Aqui estamos criando uma função que precisa fazer um fetch em uma url apenas para levar um pouco mais de tempo para resultar no console.log, para vermos como a função abaixo dela será executada antes, e vermos que o sistema não irá esperar a primeira função (https.get) ser concluída (devido ao Node), e mostratá o console.log da linha 18 primeiro.
https.get(API, funcao => {
    console.log(funcao.statusCode);
    // Lembrando que statusCode, são os números identificadores de conexão/operação HTTPS. 200, 404, 500, etc.
})

console.log('conectando API');