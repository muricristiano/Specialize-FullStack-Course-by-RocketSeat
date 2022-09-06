/* 
    Por padrão no TypeScript, qualquer variavél declarada que não é explícita, ela é "any" e por isso o TypeScript recomenda definir o tipo da variável explícitamente
*/


/* 
    ?
    E se caso quiséssemos que realmente a variável seja "any", qualquer uma? Para fins por exemplo de uma variável "info" ou "notes" ?
    ?
*/

/* 
    > Então definimos a variável explicitamente como "any", como no exemplo abaixo:
*/

let info: any;

info = [1,2,3];
info = 'Murilo'
info = true;
info = 10.30;

/* 

    Podemos ver que o TypeScript não cria alertas de codificação. Mas novamente, o TypeScript perde seu sentido, a não ser que o "any" seja realmente necessário 

    Podemos ainda ter erros, como somar string com números. Mas aí o erro fica possível apenas na execução como no JavaScript.

*/