/* 
    Forma de criar e utilizar tipos é através de Interface, primeiro entendemos na prática,
    
    Na próxima aula exploraremos a diferença entre Type VS Interface
*/

interface User { /* Não se utiliza sinal de "=" na interface */
    id: number /* Não são necessárias vírgulas */
    name: string
}

let newUser: User = {
    id: 1,
    name: "João"
}

/* Podemos pedir como parâmetro um objeto que tem o tipo de interface User, e acessar as propriedades ali dentro */
function registerNewUser(newUser: User){
    newUser.id
    newUser.name
}

console.log(newUser);