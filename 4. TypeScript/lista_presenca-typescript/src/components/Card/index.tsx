import './styles.css';

export type TypeCardProps = {
  name: string;
  time: string;
}

export function Card(props: TypeCardProps) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}