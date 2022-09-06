/* Operador Union */

//  Com operador "|" ao definir a tipagem do parâmetro, estamos definindo que o parâmetro pode ser number ou string
function printUser(id: number | string){
    console.log(`O ID do usuário é: ${id}`);
}

// Aqui executamos a function passando um número, e depois passando uma string, e ambas funcionarão.

printUser(101) /* Funcionará */
printUser("Texto") /* Funcionará */