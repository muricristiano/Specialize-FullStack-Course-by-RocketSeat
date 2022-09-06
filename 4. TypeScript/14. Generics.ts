/* 
    O que é Generics?

    O generic no TypeScript nos permite reutilizar uma determinada implementação de código, de forma tipada. Para representar um generic, nós declaramos ele dessa forma <T> (podendo ser utilizado qualquer outra letra, existem as convenções que podemos seguir:

    Convenções populares:
    <T> → Representando Type 
    <S> → Representando State
    <K> → Representando Key 
    <V> → Representando Value 
    <E> → Representando Element
*/



// function useState(){                          (Com Union, sem Generics)
function genericsFunction<T extends string | number = string>(){        /* Com Generics - Aqui, estendemos a aceitação do tipo para string ou number, o símbolo de igual, significa que caso não seja definido na declaração da variável que receberá a função, o padrão do parâmetro será string. */

    //  let state: number | string;                (Com Union, sem Generics)
    let state: T;                                    /* Com Generics */

    function get(){
        return state;
    }

//  function set(newValue: number | string){       (Com Union, sem Generics)
    function set(newValue: T){                        /* Com Generics */
        state = newValue;
    }

    return {get, set}  
// }
}





                /* Exemplo de Generics na declaração da variável que recebe a função -- TIPO STRING */


/* GENERICS: Aqui definimos qual será o tipo na hora da declaração da variável!   */
let newState = genericsFunction<string>()
newState.get()
newState.set('Muri') // Aqui estamos exemplificando o Union novamente, da aula anterior.
// newState.set(123) - ERRO, pois estamos definindo o tipo da função que estamos chamando, de String.



                /* Exemplo de Generics na declaração da variável que recebe a função -- TIPO NUMBER */


let newStateNumber = genericsFunction<number>()
newStateNumber.get();
newStateNumber.set(123);
// newStateNumber.set('Muri') - ERRO, pois estamos definindo o tipo da função que estamos chamando, de Number.



                /* Exemplo de Generics na declaração da variável que recebe a função -- TIPO NÃO DEFINIDO COM PADRÃO STRING DEFINIDO NA CRIAÇÃO DA FUNÇÃO */


let newStateUnknown = genericsFunction();
newStateUnknown.get();
newStateUnknown.set('Murilo');
// newStateUnknown.set(123); - ERRO, pois colocamos que por padrão, caso não seja definido o tipo na declaração da função, o tipo será string