/* 
    Arquivo onde determinamos todas as regras que o TS seguirá em nossa aplicação. O que ele aceitará e o que não aceitará

    INSTALAÇÃO TYPESCRIPT
    - npm install typescript -g

    1. Criar o arquivo tsconfig.json no projeto.
    Para criar o arquivo tsconsig.json, temos que abrir o terminal no workspace do projeto, e digitar no terminal 
    "tsc --init"

    2. Após arquivo criado, devemos acessar o arquivo e verificar todas as opções dentro dele, vamos procurar a linha:
    > "noImplicitAny": true, <

    3. Mudaremos ela para false, e então poderemos por exemplo remover as definições explícitas das funções abaixo para ver que o TS não irá mais acusar erros. (Setar true novamente para verificar como erro)
*/

function soma(a: number, b: number){
    return a + b;
}