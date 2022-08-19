import './styles.css'

export function StaticCard(){ 
    {/*Esse StaticCard não possui parâmetro, não haverá propriedades, é um componente estático*/}
    return(
        <div className="staticcard">
            <strong>Card estático</strong>
            <small>Propriedades estáticas no próprio .jsx</small>
             {/* Aqui podemos ver que ele não cria parâmetros para receber as propriedades*/}
        </div>
    );
}