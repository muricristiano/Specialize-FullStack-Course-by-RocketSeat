/* 
    setTimeout
    - É uma função nativa do JS, que recebe como parâmetro uma função a ser executada, e um tempo em milisegundos para essa função ser executada.
*/

function mensagem(){
    console.log('Mensagem que será executada após 1s devido ao tempo inserido no setTimeout');
}

setTimeout(mensagem, 1000)