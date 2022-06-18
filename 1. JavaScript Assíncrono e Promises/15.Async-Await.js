/*  
    Async / Await

    - Maneira de escrever Promises
    - Syntactic Sugar
*/

// Criação da promessa
const promessa = new Promise( function( resolve, reject) {
    return resolve('ok')
})

// criação da async, que é uma função que irá esperar a execução de uma promise (nesse exemplo, a async, irá declarar um objeto que receberá após esperar o objeto promessa acima ser executado, e nesse exemplo mostrará no console.log o que há atribuido)
async function start() {
    const result = await promessa
    console.log(result)
}

//Execução da funçao async
start()