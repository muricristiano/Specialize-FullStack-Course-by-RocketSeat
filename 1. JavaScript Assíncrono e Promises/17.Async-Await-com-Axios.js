


async function fetchRepos() {
    try{
        const url = 'https://api.github.com/users/muricristiano' // Melhor prática para clean code
        const user = await axios.get(url) // Objeto user irá executar e esperar o resultado do axios.get feito na url, atribuirá o resultado nesse objeto user criado (sem precisar fazer conversões .json)
        const repos = await axios.get(user.data.repos_url) //  Objeto repos criado para executar, esperar e receber o resultado do axios.get AGORA ESPECÍFICO feito no resultado do axios.get de URL feito previamente, sendo agora espefícico em seu caminho, podendo explorar com facilidade os dados coletados no primeiro .get
        console.log(repos.data);
    }catch(e){
        console.log(e);
    }
}

fetchRepos()