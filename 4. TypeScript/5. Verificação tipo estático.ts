/* 
    Aqui podemos verificar que, ao declararmos uma string com valor atribuído, e tentar executá-la, mesmo não tendo erro na sintaxe, o TS já acusa erro. 
*/

const stringX = '';

stringX() /* Pois aqui estamos tentando executar uma string como se fosse uma função */

/* 
    Já no JS, isso não acusaria erro algum no arquivo, descobriríamos apenas após a execução
*/




function sum(a: number, b: number){ /* Aqui, caso não seja definido o tipo, o TS alerta (pontilhado em cinza) a brecha para erros, mas ainda sim permite utilizar, não acusa como grave*/
    return a + b
}

/* 
    EXTRA: Ao tentar acessar uma propriedade que não existe em um objeto, o TS também avisa que não existe, e também já sugere as existentes
*/