/* 
    Aqui criaremos um objeto e utilizaremos duas tipagens diferentes em conjunto.
*/

type Person = {
    name: string;
    document: number;
}

type User = {
    username: string;
    isAdmin?: boolean; // Propriedade opcional (Aula Anterior).
}

    // UNIÃO DE DUAS TIPAGENS DE OBJETOS DIFERENTES EM UMA TIPAGEM.
type PersonAccountInfo = Person & User; 


    /* UTILIZAÇÃO DA TIPAGEM FUNDIDA, e atribuição das propriedades como sendo de uma tipagem. */
let account: PersonAccountInfo = {
    name: 'Murilo',
    document: 123,
    username: 'muricristiano',
}

console.log(account)