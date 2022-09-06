

/* NÃO OBRIGATÓRIO / NÃO ALERTA CASO NÃO TIPARMOS A FUNÇÃO */

/* 
    Tipagem de funções, algumas possuem return ou não, sendo assim podemos defini-las
*/

// Nesse exemplo definimos a função como do tipo :void, ao tentar realizar um return, o TS alerta incompatibilidade.
function showMessages(message: string): void {
    return message; /* ERRO: Por exemplo essa linha deve apresentar erro, pois a função é void */
}



// Para definir o retorno de uma função, podemos definir que tipo ela irá retornar (string, number, object, etc). Qualquer dado retornado diferente irá alertar incompatibilidade

// function com return de number:
function showNumber(): number {
    return 10;
}

// function com return de string:
function showString(): string {
    return 'A';
}

// function com return de boolean:
function showBoolean(): boolean {
    return true;
}
