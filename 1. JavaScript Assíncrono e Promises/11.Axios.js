/*
# O que é o Axios?
    Biblioteca que utilia o fetch mas, mais simplificada!
    Axios é um cliente HTTP baseado-em-promessas para o node.js e para o navegador. É isomórfico (= pode rodar no navegador e no node.js com a mesma base de código). No lado do servidor usa o código nativo do node.js - o modulo http, enquanto no lado do cliente (navegador) usa XMLHttpRequests.

# Instalação do AXIOS no projeto atual (Instalação do Package):
    - npm install axios

# Instalação das dependências:
    - npm init -y

*/

// Para inserir a biblioteca axios no JS, a index.html do arquivo JS, deve conter essa tag script abaixo, é recomendável estar acima da tag script do arquivo JS:
// <script src="https://unpkg.com/axios/dist/axios.min.js"></script>, e pronto!

// Aqui estaremos utilizando o axios no JS após o import acima, o .get do axios em uma url, buscando as informações

// Nesse exemplo estamos buscando informações do link, o link já é uma api pronta do github sobre o nosso usuário.
axios.get("https://api.github.com/users/muricristiano")
    .then(res => {
        console.log(res.data);
});

