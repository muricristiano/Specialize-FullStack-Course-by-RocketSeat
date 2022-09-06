/*
    Type Assertions
    - Asserção de tipo normalmente é utilizado quando o TypeScript não sabe qual é a tipagem em um determinado objeto.
    - Para contornarmos isso, podemos criar um type informando quais são as propriedades desse objeto.
*/

// 1. Criamos um Type de Objeto (? Similar a uma constructor function, só que sem criar na function e sim na declaração ?)
type UserResponse = {
    id: number;
    name: string;
    avatar: string;
}

// 2. Criamos o objeto, e usamos o "as" para referenciar o TYPE que criamos acima para um objeto, com as propriedades que definimos no TYPE.
let userResponse = {} as UserResponse;


// Demonstração de êxito:
userResponse.id = 0;
userResponse.name = 'Muri'
userResponse.avatar = 'Avatar'