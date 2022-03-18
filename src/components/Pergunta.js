import React from "react";
import Icone from "./Icone";
import Card from "./Card";

export default function Pergunta(props) {
    const {acuracia, pergunta, resposta} = props.card;
    const {index, adicionarPerguntaRespondida} = props;

    const [mostrarCard, setMostrarCard] = React.useState(false);

    function mostrarQuestaoCard(respondido) {
        if (!mostrarCard && respondido === ""){
            setMostrarCard(true);
        }
    }

    const [respostaEscolhida, setRespostaEscolhida] = React.useState(acuracia);
    
    function escolherResposta(escolha) {
        setRespostaEscolhida(escolha);
        setMostrarCard(false);
        adicionarPerguntaRespondida(escolha);
    }
    
    if (!mostrarCard){
        return (
            <div className="pergunta" onClick={() => mostrarQuestaoCard(respostaEscolhida)}>
                <h3 className={respostaEscolhida}>Pergunta {index}</h3>
                <Icone acuracia={respostaEscolhida} />
            </div>
        )
    } else {
        return (<Card pergunta={pergunta} resposta={resposta} escolherResposta={escolherResposta} />)
    }
}