import React from "react";
import Icone from "./Icone";
import Card from "./Card";

export default function Pergunta(props) {
    const {acuracia, pergunta} = props.card;
    const {index} = props;

    const [mostrarCard, setMostrarCard] = React.useState(false);

    function mostrarQuestaoCard(respondido) {
        if (!mostrarCard && respondido === ""){
            setMostrarCard(true);
        }
    }
    
    if (!mostrarCard){
        return (
            <div className="pergunta" onClick={() => mostrarQuestaoCard(acuracia)}>
                <h3 className={acuracia}>Pergunta {index}</h3>
                <Icone acuracia={acuracia} />
            </div>
        )
    } else {
        return (<Card pergunta={pergunta} />)
    }
}