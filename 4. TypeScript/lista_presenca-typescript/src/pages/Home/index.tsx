import React, { useState, useEffect } from 'react';
import './styles.css';

/* Primeiramente importamos também a tipagem do componente que fizemos lá no componets/Card, adicionando pós uma virgula: "TypeCardProps", IMPORTANTE ADICIONAR "EXPORT" no type do componente */
import { Card, TypeCardProps } from '../../components/Card';

/* Tipagem de RESPOSTA do fetch */
type ProfileResponse = {
  name: string;
  avatar_url: string;
}

/* Tipagem de Usuário */
type User = {
  name: string;
  avatar: string;
}

export function Home() {
  const [studentName, setStudentName] = useState('');
  /* Aqui abaixo, estamos tipando o useState, basta abrir tag <>, e dentro informar a tipagem do componente que estaremos utilizando, e como o state é um array de um componente tipado, utilizamos o "[]", sendo assim fica: 
  
  "const [students, setStudents] = useState<TypeCardPropos[]>([]);"
  
  Como abaixo:
  */
  const [students, setStudents] = useState<TypeCardProps[]>([]);

  /* Aqui, definimos o useState de USER também, só que sendo um objeto, que inicia vazio, ficando da forma que está abaixo: */
  const [user, setUser] = useState<User>({} as User);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(prevState => [...prevState, newStudent]);
  }


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/rodrigorgtic');
      /* Aqui abaixo, estamos já utilizando a resposta da API tipada no tipo que criamos como ProfileResponse */
      const data = await response.json() as ProfileResponse;

      /* Aqui já podemos acessar pois como estamos definindo o tipo, acessamos o que o tipo tem de propriedade */
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>

        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        students.map(student => (
          <Card
            key={student.time}
            name={student.name}
            time={student.time}
          />
        ))
      }
    </div>
  )
}
