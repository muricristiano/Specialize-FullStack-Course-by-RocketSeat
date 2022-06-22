/*  
    Async (tipo de função) / Await (Comando de executar e esperar)

    - Maneira de escrever Promises
    - Syntactic Sugar
*/

// Criação da promessa
const promessa = new Promise( function( resolve, reject) {
    return resolve('ok - promessa concluída')
})

// criação da async, que é uma função que irá executar e esperar a execução de uma promise (nesse exemplo, o try da async, irá declarar um objeto que receberá o resultado do await(executar e esperar) da promessa executada, após esperar o objeto promessa acima ser executado, nesse exemplo, mostrará no console.log o que foi atribuido na cosnt que recebeu o await da promise)
async function start() {
    // TRY/CATCH/FINALLY - Autoexplicativo. Em Resumo, usamos aqui try/catch/finally ao utilizar async
    try{
        const result = await promessa
        console.log(result)
    }catch(e){
        console.log(e);
    }finally{
        console.log('Concluído! Mensagem sempre será exibida com sucesso ou erro: (é o finally do try/catch)');
    }
    
}

//Execução da funçao async
start()

// 'Mensagem do final do código, porém a mensagem será exibida primeiro, pois tudo foi executado assíncronamente'
console.log('Mensagem do final do código, porém a mensagem será exibida primeiro, pois tudo foi executado assíncronamente');