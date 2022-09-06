
/* Tipagem explícita, deixando claro qual tipo é o parâmetro */
function showTicketTwo(user: string, ticket: number){
    console.log(`Olá ${user}. Seu número de bilhete é ${ticket}`);
}

/* Aqui veremos que ao começar a digitar o primeiro parâmetro, o TypeScript já irá mostrar um dado acima do cursor, qual é o parâmetro que estamos inserindo para a função, e qual o tipo que ela está pedindo, ao pressionar "vírgula", ele já irá mostrar o próximo parametro como selecionado na legenda */
showTicketTwo('Murilo',123)
