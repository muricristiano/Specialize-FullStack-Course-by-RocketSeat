import './styles.css'

export function Card(properties){ 
    {/*estamos criando "properties" como parâmetro, pois aqui estaremos declarando as propriedades do componente a partir dessa declaração como veremos abaixo (properties.name, properties.time, properties.age, etc..)*/}
    return(
        <div className="card">
            <strong>{properties.name}</strong>
            <small>{properties.time}</small>
             {/* Aqui estão as declarações de propriedades subsequentes da declaração que fizemos com esse objetivo na declaração da funcion */}
        </div>
    );
}