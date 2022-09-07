/* 
    TYPE vs INTERFACE 
    Qual a diferença?
    > O objetivo de ambos serve para definir tipagens no TypeScript.
    
    TYPE
    O type é mais recomendado por ser mais simples, fácil de lidar com tipos primitivos, por ser mais flexível. 

    INTERFACE
    Já as interfaces são utilizadas normalmente em criação de libs, para aqueles que gostam da programação orientada a objetos.

    O exemplo abaixo mostra a diferença na sintaxe e UNIÃO entre TYPE e INTERFACE:
*/

// Type 1
type TStudent = {
    name: string;
    age: number;   
}

// Type 2
type TSchool = {
    schoolName: string;
    address: string;
}

// Union de Types (1 e 2)
type TRegistration = TStudent & TSchool;



/* ------------------------------------------------------------ */


// Interface 1
interface IStudent {  
    name: string
    age: number   
}
/* Não utiliza sinal de igual */
/* Não se utiliza vírgula em cada propriedade, basta quebrar a linha */


// Interface 2
interface ISchool {
    schoolName: string
    address: string
}
/* Não utiliza sinal de igual */
/* Não se utiliza vírgula em cada propriedade, basta quebrar a linha */



// Union de INTERFACES (1 e 2)

/* Em interfaces, utiliza-se extends, e as interfaces unidas, separadas por vírgulas e com um abre e fecha chaves no final */

interface IRegistration extends IStudent, ISchool {}