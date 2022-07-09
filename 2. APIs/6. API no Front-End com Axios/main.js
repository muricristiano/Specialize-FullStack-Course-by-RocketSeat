/* 
    1. Aula | Conhecendo o Axios

    - Criar uma pasta para criarmos uma nova api com o nome "axios-discover-api"

    - Criar os arquivos "index.html" e "main.js"

    - No index.html: Importar o AXIOS via CDN, link está lá. E linkar ao main.js do qual criaremos os códigos. Nessa ORDEM
    (O import do axios antes da importação do main.js deve ser feita para que possamos utilizar o axios dentro do código main.js)

*/

//--------------------------------------------------------------------

/* 
    2. Aula | Rodando API

    - Baixar em zip novamente a api "https://github.com/jakeliny/node-api-discover"

    - Copiar a API zerada para dentro dessa parte do Axios, para agora utilizarmos com o próprio axios.

    - para iniciar a API, basta ir pelo terminal no endereço de onde a API foi copiada e enviar os comandos, para instalar as dependencias e subir a API para deixar aberto:
        1. "npm i"
        2. "npm start"

    - para acessar os dados da API no navegador, basta acessar "localhost:5500/api"
*/

//--------------------------------------------------------------------

/* 3. Aula | GET  */

const url = "http://localhost:5500/api" // Definindo a constante url para facilitar a reutilização dela muitas vezes nesse capítulo

const randomAvatar = "http://lorempixel.com.br/400/400"

// - Abrir o index.html com Live Server

function getUsers() {
    axios.get(url)
    .then(res => {
        DIVdaAula3doHTML.textContent += JSON.stringify(res.data)        
        // console.log(res.data.users[0])  = mostraria o usuário 0 no log do navegador.
    })
    .catch(err => console.error(err))
}

getUsers()
// No console do navegador, podemos observar os dados em:{} / data: /  users (o array)


//--------------------------------------------------------------------

/* 4. Aula | POST */

function addNewUser(name, city, avatar){
    axios.post(url, 
        {name,city,avatar}) // aceito como body do require.
    .then(res => {
        DIVdaAula4doHTML.textContent += JSON.stringify(res.data);
    })
    .catch(err => console.error(err))
}

addNewUser('muri','states',randomAvatar) //Irá inserir toda vez que a página for atualizada(executar os scripts)

/* No exercício faziamos algo mais simples, o que foi feito acima foi mais avançado para treinar enviar parâmetros de forma mais especifica e livre, mas no exercício fizemos:

const newUserAdded {
    name: 'lalala',
    city: 'ajsjsajsja',
    avatar: 'https:jsajsjjs'
}

*/

//--------------------------------------------------------------------

/* 5. Aula | GET com parâmetros específicos */

function getUniqueUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        userId.textContent = response.data.userId
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userAvatar.src = response.data.avatar
    })
    .catch(err => console.error(err))
}

getUniqueUser(200) // Pegando o usuário número 2

//--------------------------------------------------------------------

/* 6. Aula | PUT */

function updateUser(id, name, city, avatar){
    axios.put(`${url}/${id}`, {name,city,avatar})
    .then(res => {
        DIVdaAula6doHTML.textContent += JSON.stringify(res.data)
        // Check do "Updated user" na página
        console.log(res.data)
    })
    .catch(err => console.error(err))
}

updateUser(200, "Murizão", "Brasilzão", randomAvatar)
// ID a ser alterado, novoName, novaCity, novoAvatar

//--------------------------------------------------------------------

/* 7. Aula | DELETE  */

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(res => {
        DIVdaAula7doHTML.textContent += JSON.stringify(res.data)
        console.log(res.data)
    })
    .catch(err => console.error(err))
}

deleteUser(4)

