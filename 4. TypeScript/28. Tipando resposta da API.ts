/* 

    Tipando resposta da API



    1. Para a tipagem de resposta da API precisamos criar dois types

type ProfileResponse = {
  name: string;
  avatar_url: string;
}

type User = {
  name: string;
  avatar: string;
}



    2. Importar as propriedades do nosso type no useEffect():

useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/rodrigorgtic');
      const data = await response.json() as ProfileResponse;

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }
    fetchData();
}, []);


    3. E modificar o nosso estado:

const [students, setStudents] = useState<CardProps[]>([]);


*/