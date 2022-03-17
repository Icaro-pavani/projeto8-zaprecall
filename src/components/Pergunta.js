export default function Pergunta(props) {
    return (
        <div className="pergunta" onClick={props.mostrarPergunta}>
            <h3>Pergunta {props.index}</h3>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}