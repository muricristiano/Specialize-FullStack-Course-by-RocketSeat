/* 
    Tipando Estados


    1. Para tipar os estados precisamos exportar o type do nosso componente Card.



    export type CardProps = {
    name: string;
    time: string;
    }




    2.Após a exportação, precisamos importar em nosso arquivo Home.tsx

    import { Card, CardProps } from '../../components/Card';
    
    
    
    3. E em seguida, passar as propriedades para o nosso estado novamente em nosso arquivo Home.tsx:

    const [students, setStudents] = useState<CardProps[]>([]);

*/