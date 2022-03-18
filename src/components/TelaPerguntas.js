import React from "react";
import Pergunta from "./Pergunta";
import Bottom from "./Bottom";

import embaralhar from "./embaralhar";

export default function TelaPerguntas(props) {
    const deck = props.deck;
    embaralhar(deck);

    const [perguntasRespondidas, setPerguntasRespondidas] = React.useState(0);
    const [iconesPerguntasRespondidas, setIconesPerguntasRespondidas] = React.useState([]);

    function adicionarPerguntaRespondida(escolha){
        setPerguntasRespondidas(perguntasRespondidas + 1);
        setIconesPerguntasRespondidas([...iconesPerguntasRespondidas, escolha]);
    }

    return (
        <div className="tela-perguntas">
            <div className="topo-perguntas">
                <img className="logo-perguntas" src="imagens/logo-pequeno.png" alt="logo-pequeno" />
                <h2>ZapRecall</h2>
            </div>

            <div className="perguntas">
                {deck.map((carta, index) => {
                    return (
                        <Pergunta 
                            key={index + 1} 
                            card={carta} 
                            index={index + 1} 
                            adicionarPerguntaRespondida={adicionarPerguntaRespondida} 
                        />
                    )
                })}
            </div>

            <Bottom perguntasRespondidas={perguntasRespondidas} totalPerguntas={deck.length} iconesRespondidas={iconesPerguntasRespondidas} />
        </div>
    )
}