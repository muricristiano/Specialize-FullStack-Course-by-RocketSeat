import React, { useState, useEffect } from "react";
import "./styles.css";
import { Card } from '../../components/Card';
import { StaticCard } from '../../components/StaticCard';

export function Home() {
  {/* Aula de useState */}
  const [cardName, setCardName] = useState(' "Valor inicial opcional (aqui tem useState)" ');

  {/* Aqui, estamos fazendo a criação de um estado em vetor */}
  const [students, setStudents] = useState([]); {/* Este abre e fecha colchetes define o state como vetor "[]"  */}

  {/* AULA. 21. Consumindo APIs, aqui estamos criando um state que receberá dados da api.github */}
  const [user, setUser] = useState({name: '', avatar:''})

  {/* Aqui abaixo estamos criando uma função, que adiciona um novo estudante no state array, faremos com que a função utilize o conteúdo que foi digitado no input, ao clicar no botão adicionar lá no button, adicionaremos essa função aqui para ser executada, além de adicionar o nome que estará no momento digitado no campo, também adicionaremos a hora/minutos/segundos em que foi adicionado, e utilizaremos a hora atual do sistema, em pt-br, utilizando 2 digitos para cada hora/minutos/segundos */}
  function handleAddStudent() {
    const newStudent = {
      name: cardName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudents((prevState) => [...prevState, newStudent]);
    {/* 
        Aqui acima estamos usando a função que atualiza o state array, se utilizássemos apenas o "setStudents(newStudent)", todo o valor seria substituido e ficaria apenas o ultimo card adicionado. 
    
        ao utilizarmos dessa maneira acima, usamos o "..." spread declarando o "state" anterior como no exemplo "prevState", para junto com o "newStudent", populem o state array, sendo assim, sempre irá atualizar e descartar o que havia antes, só que, inserindo um "novo dado" que é a soma do anterior com o novo.
    */}
  }

  {/* O useEffect é um hook/função executada automaticamente sempre que o componente é renderizado. O que está dentro do parametro array, recebe states como parâmetro, e sempre que esses states forem atualizados, o useEffect será executado */}
  useEffect(() => {
    
     {/* Aqui criamos uma function para usar o fetch dentro do próprio useEffect, pois na declaração da function conseguimos usar   async, e dentro dela, usar o fetch, mas não conseguimos fazer um fetch diretamente sendo async. */}
    async function fetchData() {
      const response = await fetch(`https://api.github.com/users/${cardName}`)
      const data = await response.json()

      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }

    fetchData();
  }, [cardName]);

  return (
    <div className="container">
      <header>
        <h1>Adicionar usuário do github</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="" />
        </div>
      </header>
      

      <input 
      type="text"
      placeholder="Digite um nome..."
      onChange={event => setCardName(event.target.value)}
      />

      <button 
      type="button"
      onClick={handleAddStudent}>
        Adicionar
      </button>

    {/* OBS: Como é um array, podemos utilizar o .map, que é uma estrutura de repetição para listar todos os dados dentro do array, com os seguintes parâmetros de mostrar dentro de um componente card, passando os parâmetros para esse componente para cada novo student que estiver dentro desse array.

    EXTRA: Por ser um STATE, essa listagem será em tempo real, estará refletindo, ligada. para qualquer alteração e adição feita com a página aberta, a interface que está utilizando o state, aqui abaixo, irá refletir em tempo real! a cada adição que fizermos no array state */}

    {
      students.map((student) => (  
        <Card 
          key={student.time}
          name={student.name}
          time={student.time}
        />
      ))
    }

{/* 
      Aqui abaixo estão os componentes sendo importados (estático e dinâmico)
      
      <StaticCard/> // Aqui é o card sem propriedades/parâmetros, é um componente estático, criamos ele separadamente
      <Card name="Murilo R. C." age={30} />
      <Card name="Guilherme R. P." age={17} />
*/}

    </div>
  )
}