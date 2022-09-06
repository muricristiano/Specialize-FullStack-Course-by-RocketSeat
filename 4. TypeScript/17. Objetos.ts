/* 
    Nessa aula vamos aprendemos como criar TIPAGENS em objetos.

*/

type Point = { /* Criando um TYPE de um objeto, com suas propriedades */
    x: number;
    y: number;
}

function printCoord(points: Point){ /* Criando uma função cujo parâmetro é um objeto do tipo Point. (aqui estamos utilizando o type de objeto) */
    console.log(`O eixo X é: ${points.x}, e o eixo Y é: ${points.y}`);
}

/* Aqui estamos chamando a função, e com isso, passando diretamente como parâmetro, as propriedades que existem no type 'Point' que criamos, sendo assim, a função saberá exatamente como executar seu algoritmo sendo que são as propriedades do objeto que utilizaremos dentro da função.  */
printCoord({x: 100, y: 50});
