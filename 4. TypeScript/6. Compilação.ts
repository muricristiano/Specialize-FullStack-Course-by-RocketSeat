/*
    Para essa aula, devemos acessar: https://www.typescriptlang.org/play
    
    1- Digitaremos o código abaixo, e executaremos nessa plataforma o código, e então poderemos ver o log do lado direito nas abas, e o principal, a compilação do TypeScript para JavaScript

    No final de toda a escrita do código em TypeScript, o código é convertido em JavaScript 
*/


// Código em TypeScript:

function showTicket(user: string | null, ticket:number){
    console.log(`Olá ${user}. Seu número de bilhete é ${ticket}`);
}

showTicket('Murilo', 123)



// Resultado da conversão para JavaScript:

/* 
    "use strict";
    function showTicket(user, ticket) {
        console.log(`Olá ${user !== null && user !== void 0 ? user : 'Usuário Padrão'}. Seu número de bilhete é: ${ticket}`);
    }
    showTicket('João Inácio', 123);
*/