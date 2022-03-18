import React from "react";

export default function Card(props) {
    const {pergunta, resposta, escolherResposta} = props;

    const [mostrarResposta, setMostrarResposta] = React.useState(false);

    if (!mostrarResposta){
        return (
            <div className="pergunta-card">
                <p>{pergunta}</p>
                <img src="imagens/setinha.png" alt="seta" onClick={() => setMostrarResposta(true)} />
            </div>
        )
    } else {
        return (
            <div className="pergunta-card">
                <p>{resposta}</p>
                <div className="botoes">
                    <button className="botao-erro" onClick={() => escolherResposta("erro")}>Não lembrei</button>
                    <button className="botao-proximo" onClick={() => escolherResposta("proximo")}>Quase não lembrei!</button>
                    <button className="botao-acerto" onClick={() => escolherResposta("acerto")}>Zap!</button>
                </div>
            </div>            
        )
    }
}