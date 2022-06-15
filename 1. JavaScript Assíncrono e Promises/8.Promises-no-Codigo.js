/* 
    Promise

    - A promessa de que algo irá acontecer.
    - Poderá dar certo ou errado.
    - Mas irá acontecer.
*/

// Sintaxe de uma promessa
// new Promise(() => {})  


// Condição para teste, aqui iremos alterar para observar o comportamento (true e false)
let motoristaAceita = true



console.log('À pedir uber');
const promessa = new Promise((resolve, reject) => { // Devemos atribuir a promise a alguma declaração.
    if (motoristaAceita) {
        return resolve('Motorista à caminho.')
    } else {
        return reject('Não há motoristas.')
    }

})
console.log('Aguardando');



promessa // em processo: pending
    .then(result => console.log(result)) // .then = fulfilled
    .catch(erro => console.log(erro)) // .catch = rejected
    .finally(() => console.log('Finalizada'))  //.finally = settled


// O .Finally, é onde finaliza independente de qual for o resultado da promise

// o .finally sempre irá executar essa função final