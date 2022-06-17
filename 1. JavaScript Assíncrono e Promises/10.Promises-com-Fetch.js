/* O que é FETCH?

    É a fetch API, é uma função que irá receber como argumento a url que será feito o fetch.

    fetch significa buscar/pegar, com estrutura de promise.

    a função busca pega os dados de uma URL, com estrutura de Promise.
*/

/* 
    Promises com fetch

    utilizar no exemplo, fazer fetch no usuário do github:
    https://api.github.com/users/muricristiano

*/


// Nesse exemplo abaixo, podemos ver no console do navegador que uma Promise foi criada.
// console.log(fetch('https://api.github.com/users/muricristiano'))


// PROMISES COM FETCH AVANÇADO:

// Aqui conseguiremos ver no console do browser, todos os meus repositório listados do meu usuário no github, com apenas a url do meu usuário.
// ENCADEAMENTO DE PROMESSAS
fetch('https://api.github.com/users/muricristiano') // buscando os dados da URL
    .then( response => response.json()) // Busca com sucesso, e transformando a resposta em json
    .then( data => fetch(data.repos_url)) // transformado com sucesso e fazendo um novo fetch(busca) dentro do arquivo json transformado
    .then( res => res.json()) // transofmrando a nova busca em json
    .then( d => console.log(d)) // mostrando alguma informação no nível atual

