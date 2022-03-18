import Icone from "./Icone";

export default function Pergunta(props) {
    const {index, acuracia} = props.card;
    console.log(acuracia);

    return (
        <div className="pergunta" onClick={props.mostrarPergunta}>
            <h3 className={acuracia}>Pergunta {index}</h3>
            <Icone acuracia={acuracia} />
        </div>
    )
}