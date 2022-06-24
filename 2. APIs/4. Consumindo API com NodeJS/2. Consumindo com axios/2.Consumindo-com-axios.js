const express = require('express')
const axios = require('axios')
const app = express()
app.listen('3000')

//middleware
app.use(express.json())

app.route('/').get((req,res) => {
    axios.get('https://api.github.com/users/muricristiano') // Buscando com Axios, dados do usuário muricristiano
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`)) // Enviando então, como resposta para a requisição feita no imsomnia ("GET localhost:3000"), a foto do avatar do usuário Murilo, em png, com a tag img do html.
    .catch(error => console.log(error))
})


