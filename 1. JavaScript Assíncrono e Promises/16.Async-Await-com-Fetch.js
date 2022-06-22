
// Aqui abaixo, é como seria feito caso fosse feito com fetch/promise para buscar o usuário e buscar a lista de repositório
// fetch('https://api.github.com/users/muricristiano')
// .then(response => response.json())
// .then(data => fetch(data.repos_url))
// .then(res => res.json())
// .then(d => console.log(d))
// .catch(error => console.log(error))



// Como faria usando async 
async function start() {
    const url = 'https://api.github.com/users/muricristiano'
    try{
        const user = await fetch(url).then(u => u.json()) // atribuindo coleta de dados ao const response / .then = transformando em json

        const userRepos = await fetch(user.repos_url).then(r => r.json()) // atribuindo coleta de dados de repositorio do json tranformado anterior / .then = transformando em json
        
        console.log(userRepos);
    }catch(e){
    console.log(e);
    }
}

// async sempre devolve uma promise, podemos utilizá-la mesmo na execução da async, com .then .catch .finally na própria execução e não na criação
start()
.then(console.log("Função async executada"))
.catch(e => console.log(e))
.finally(console.log("Função finalizada"))