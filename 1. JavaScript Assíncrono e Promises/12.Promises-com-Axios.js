/* 

    Axios

    Com esse código abaixo poderemos verificar o axios em funcionamento, mostrando dados no console retornando uma Promise pendente, (no console: "> Promise {<pending>}"")

    console.log(axios.get('https://api.github.com/users/muricristiano'))

*/

// Aqui poderemos então trabalhar da mesma forma que fizemos com o fetch, trabalhando as possíveis respostas:

// 1. Nessa linha baixo fazemos o get (pegar informações), as informações nesse exemplo vem como um objeto, contendo: configurações, dados, header, request, status. etc, podemos posteriormente acessar esses dados dessa forma de exemplo "response.data" ou "response.data.login" para por exemplo mostrar o login do usuário)
axios.get('https://api.github.com/users/muricristiano')
    .then(declaracaoDoGet => { // 2. Nessa linha, declaramos os dados do get feito e nomeamos ele de "response", e com ele, executaremos o seguinte código (quando se usa arrow function direto sem declaração dessa forma:)

        console.log(declaracaoDoGet); // 3. Aqui, o que será executado é que mostraremos um console.log, e dentro desse clg, mostramos o que veio no conteúdo.

        console.log(declaracaoDoGet.data); // 4. Aqui estamos acessando um dos atributos do get feito. Mostrando todos os dados.

        console.log(declaracaoDoGet.data.login); // 5. Aqui estamos acessando um dado específico, como por exemplo, o login de usuário do github

    })
    .catch(declaracaoDoErro => console.log(declaracaoDoErro))// Tratamento de erro, mostrará qual o erro, para testar basta apagar o "h" do https. Irá resultar em um Bad Request.




//         EVITAR - Encapsulamentos de Gets (Soluções melhores abaixo do exemplo de encapsulamento)

// 1. Aqui atribuimos gets a declarações e utilizando as mesmas posteriormente, dentro do get feito.
axios
    .get('https://api.github.com/users/muricristiano')
    .then(getA => {
        const getDeclarationA = getA.data

        // 2. Get encapsulado.
        axios.get(getDeclarationA.repos_url)
        .then(getB => console.log(getB.data))// 3. Resumindo, aqui pegamos os dados e atribuimos a uma declaração, depois, fizemos um novo get dentro dessa declaração que criamos, buscando por dados dentro em uma nova camada, apenas para mostrar no console.log e mostrar como funciona o encapsulamento.
        .catch(erroA => console.log(erroA))
    })



//      SOLUÇÃO MAIS EFICIENTE, PRÁTICA E LIMPA: Arrow function fazendo um novo get direto, e após, um novo ".then" sendo sequencial/encadeado em vez de encapsulado.

// 1. Criando sequências de .then um após o outro e não um dentro do outro com arrow function de execução direta.
axios
    .get('https://api.github.com/users/muricristiano')
    .then(getX => axios.get(getX.data.repos_url)) // 1. Arrow function direto com outro get
    .then(getXresult => console.log(getXresult.data)) // 2. ".then" seguinte usando o dado
    .catch(erroA => console.log(erroA))
