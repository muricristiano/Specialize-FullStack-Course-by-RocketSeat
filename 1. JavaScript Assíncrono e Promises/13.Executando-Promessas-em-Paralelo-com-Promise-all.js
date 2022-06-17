// Criando múltiplas promises simultâneas de uma só vez em um array

// IMPORTANTE: Só executará o .then após todos os get terminarem de rodar.

// 1. Promise.all, e passar um array como parametro tendo os gets intencionados dentro
Promise.all([
    axios.get('https://api.github.com/users/muricristiano'),
    axios.get('https://api.github.com/users/muricristiano/repos')
])
.then(respostas => { // a reposta virá como um só objeto array, porém, IMPORTANTE: a posição da ordem do Promise.all corresponderá a mesma posição do array pesquisado acima
    console.log(respostas[0].data.login) // Tratando o get dos dados totais do usuário murilo na api github (login do usuário)
    console.log(respostas[1].data.length) // Tratando os dados especificamente dos repositórios do murilo (quantidade de repositórios do usuário)
})
.catch(erro => console.log(erro.message)) // Para testar basta tirar um "h" do endereço url