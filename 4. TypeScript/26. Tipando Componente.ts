/* 
    Para adicionar sintaxe React ao TYPESCRIPT

    Comando via terminal:
    npm i --save-dev @types/react



    1. Trocar extensões de arquivos .jsx para .tsx manualmente.

    2. Já iremos ver erros caso não tenha sido instalado a tipagem do react no typescript atual.

    3. Após isso, apenas serão exigidos, tipagens de componentes:


// Criação completa da tipagem

type CardProps = {
  name: string;
  time: string;
}




// Para definir explicitamente aqui dentro do parâmetro

export function Card(props: CardProps) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}
*/