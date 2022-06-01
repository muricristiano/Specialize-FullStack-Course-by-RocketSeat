/* 
    # CALLBACK

    Conceito de callback, significa que uma função é enviada como argumento para uma função, e depois de algumas tarefas ou não, ela será chamada, provavelmente com argumentos trabalhados dentro da função em que foi enviada e será executada (chamada de volta).
*/

//Funções aceitam qualquer tipo de dado como argumento
function imprimirDado(dado){
    console.log('Outras tarefas');
    console.log(dado());
}

// imprimirDado(1)
// imprimirDado('texto')
// imprimirDado(true)
// imprimirDado({nome: 'João'})
// imprimirDado([1,2,3])

// Mais importante: Podemos passar uma função dentro de uma função.
imprimirDado(function () {
    return 'Olá mundo!'
})


