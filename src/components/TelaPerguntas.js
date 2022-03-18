import React from "react";
import Pergunta from "./Pergunta";

import embaralhar from "./embaralhar";

export default function TelaPerguntas(props) {
    const deck = props.deck;
    embaralhar(deck);
    console.log(deck);

    return (
        <div className="tela-perguntas">
            <div className="topo-perguntas">
                <img className="logo-perguntas" src="imagens/logo-pequeno.png" alt="logo-pequeno" />
                <h2>ZapRecall</h2>
            </div>

            <div className="perguntas">
                {deck.map((carta, index) => <Pergunta key={index + 1} card={carta} index={index + 1}/>)}
            </div>


            <div className="bottom-perguntas">
                <h4>0/4 CONCLUÍDOS</h4>
            </div>
        </div>
    )
}