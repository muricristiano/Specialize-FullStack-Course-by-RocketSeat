

// TYPE: Definimos um conjunto de tipagem em um type.
type IdType = string | number | undefined;


// Aqui criamos variáveis e utilizamos/reaproveitamos a tipagem com o TYPE que criamos no exemplo acima "idType"
let userId: IdType;
let adminId: IdType; // Conseguimos usar em diferentes declarações diferentes.


// Aqui definiremos e trocaremos o tipo de valor que a variável contém, e será aceito.
userId = undefined;
userId = 'string';
userId = 123;
