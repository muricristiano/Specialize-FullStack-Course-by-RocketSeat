const express = require('express')
const app = express()
app.listen('3000')

//middleware
app.use(express.json())

// Route Params - Como pegar parâmetros pela rota.


// 1. Sem Route Params
app.route('/').get((req,res) => res.send("OK"))

// 2. Com Route Params
app.route('/:variavel').get((req,res) => { // Aqui criamos um nome de um parâmetro toda vez que enviamos um parâmetro pela rota em uma requisição.

    //OBS: No insomnia, caso façamos um GET na url "localhost:3000/murilo parâmetro de rota", estaremos passando esse parâmetro e o nome desse parâmetro é o que foi definido lá no .route, ou seja "variavel", podemos assim utilizar essa informação ao utilizar esse nome do parâmetro como está abaixo.
    res.send(req.params.variavel) // Apresentamos no insomnia
    console.log(req.params.variavel) // Apresentamos no console
})


// 3. Com Route Params em diretório específico
app.route('/identidade/:variavelB').get((req,res) =>{
    res.send(`Route Params no endereço /identidade: ${req.params.variavelB}`) // Apresentamos no insomnia
    console.log(`Route Params no endereço /identidade: ${req.params.variavelB}`) // Apresentamos no console
})

