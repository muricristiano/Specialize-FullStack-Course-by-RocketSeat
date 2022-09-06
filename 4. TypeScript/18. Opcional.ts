/* 
    Como deixar uma propriedade da tipagem de um objeto opcional:
    
    Aqui deixaremos a propriedade "isAdmin" da tipagem "User" opcional, segue como é feito:
*/

type User = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean; /* Ao colocar uma interrogação "?" colado a propriedade, ela se torna opcional, sendo assim, não necessária na criação de um objeto desse tipo */
}

let newUser: User = {
    name: 'Murilo',
    email: 'murilo@email.com',
    age: 30,
}
