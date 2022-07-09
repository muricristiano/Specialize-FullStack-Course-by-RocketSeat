/* 
    AULA 1. Conhecendo o fetch

1. Baixar a API que utilizaremos para a aula no endereço:

github.com/jakeliny/node-api-discover

2. Acessar via terminal o endereço que salvarmso essa API (Dentro dessa pasta dessa parte do módulo)

3. "npm i" => Para instalar as dependências do projeto automáticamente.

4. "npm start" => Sempre que quisermos subir a API online

5. Para acesar essa api, ela está configurada na rota:
"localhost:5500/api"



OBS: O index.js da API está no node-api-discovery. Lá podemos conhecer todas as rotas já programadas pela Professora (/api | get,  /api/id | get,  /api | put, etc.), e podemos entender o que a API pede e faz em cada rota! Podemos fazer cada aula analisando como a API está fazendo.

*/

// ----------------------------------------------------------


/*

    AULA 2. GET 

1. Criar index.html
    - Adicionar div com id "DIVdaAula2doHTML"
    - Linkar o arquivo JS por script:source "<script src="main.js"></script>"

2. Criar main.js
    - Seguir as aulas dentro do main.js, fazendo anotações no arquivo


3. Aqui no arquivo "main.js", seguir a aula com as informações a seguir

*/

const url="http://localhost:5500/api" // Para facilitar a utilização frequente que teremos durante as aulas, utilizaremos essa const, como podemos ver abaixo já ao iniciar


function getUsers() {
    fetch(url)
        .then(response => response.json()) // Primeiro Fetch da API, convertendo em JSON
        .then(dadosEmJson => DIVdaAula2doHTML.textContent += `Coletando todos os dados do JSON ${JSON.stringify(dadosEmJson)}`) //Aqui estamos pegando os dados convertidos em JSON, e estamos atribuindo o texto na DIV com ID que criamos no HTML (renderApiResult), adicionando ao já existente: "Oi" por conta do "+=" / Porém na aula demonstrou apenas com a atribuição "=", sendo assim, substituindo o conteúdo lá existente: "Oi!"
        .catch(err => console.error(err))
}

getUsers()

// ----------------------------------------------------------



// AULA 3. GET com parâmetros

function getUniqueUser(id) {
    fetch(`${url}/${id}`) // Aqui estamos especificando a busca de um usuário passando parâmetros "Usuário 1" | É uma seleção bruta de usuário (para exercício), na prática real receberemos um ID como parâmetro
    .then(response => response.json())
    .then(dataJson => {
        userName.textContent = dataJson.name // Atribuindo o nome a tag "p" no html com o ID "userName"
        userCity.textContent = dataJson.city // Atribuindo a cidade a tag "p" no html com a ID "userCity"
        userAvatar.src = dataJson.avatar // Atribuindo a imagem do avatar do JSON à tag "img" com o ID "userAvatar"
    })
}
getUniqueUser(1) // Executando a função da aula 3 / Passando um parâmetro especifico para buscar


// ----------------------------------------------------------

// AULA 4. POST

function addUser(newUser) {
    // Aqui estamos criando a requisição e passando parâmetros (devemos quando quisermos utilizar requisição de alteração. Ex.: POST)
    // Padrão do fetch é GET, então não precisamos passar esses parametros e qual é o method utilizado
    fetch(url, { 
        method: "POST", // Aqui definimos o método do fetch, no exemplo: POST
        body: JSON.stringify(newUser), // Aqui é o corpo, o que está sendo enviado para a url
        headers: { // Configurações gerais da requisição
            "Content-Type": "application/json; chatset=UTF-8"
            // Tipo do conteúdo: json com charset: padrão)
        }
    })
    .then(response => response.json())
    .then(dataJson => DIVdaAula4doHTML.textContent += dataJson)
    .catch(err => console.error(err))
}

// Criando um usuário no próprio JS apenas para mostrar como inserir via POST
const newUser = {
    // id gerado automáticamente (dados inseridos com os mesmos nomes das propriedades da API que estamos usando)
    name: "Murilo Riberio",
    avatar: "http://lorempixel.com.br/400/400",
    city: "Florianópolis"
}


// Irá adicionar um usuário novo toda vez que salvarmos e a página atualizar (executando todas as funções aqui em execução)
addUser(newUser)



// ----------------------------------------------------------

// AULA 5. PUT (Alterar/Atualizar informações)

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, { // Seleção bruta de usuário (para exercício), na prática real, receberemos um ID como parâmetro
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: {
            "content-type": "application/json; chatset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(dataJson => DIVdaAula5doHTML.textContent += dataJson)
    .catch(err => console.error(err))
}


const updatedUser = {
    name: "Murilover",
    city: "São José",
    avatar: "http://lorempixel.com.br/400/400"
    // id é automaticamente não alterado, a api não está esperando por este id, será passado na url do fetch com chaves, exemplo: `${url}/1}` 
}

updateUser(updatedUser, 1) // Passando dados de usuários novos, e o ID a ser atualizado, como essa função está sendo chamada após o getUniqueUser, devemos executar/salvar o código novamente ou atualizar a página, para ver a alteração na próxima execução.

// Basta alterarmos o ID a ser alterado para podermos analisar no get geral, a efetuação da alteração.

// ----------------------------------------------------------

// AULA 6. DELETE (Excluindo dados / objetos / etc.)

function deleteUser(userIdtoBeDeleted){
    fetch(`${url}/${userIdtoBeDeleted}`, {
        method: "DELETE",
        // Não precisa de body, pois não estamos enviando nada para a API, estamos enviando somente o ID do usuário a ser excluído, e está sendo enviado pela prórpria URL
        headers: {
            "content-type": "application/json; chatset=UTF-8"
        }
    })
        .then(res => res.json())
        .then(dataJson => DIVdaAula6doHTML.textContent += dataJson)
        .catch(err => console.error(err))
}

deleteUser(5)

// ----------------------------------------------------------
