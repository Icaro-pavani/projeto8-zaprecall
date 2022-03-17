import Pergunta from "./Pergunta";

export default function TelaPerguntas(props) {
    return (
        <div className="tela-perguntas">
            <div className="topo-perguntas">
                <img className="logo-perguntas" src="imagens/logo-pequeno.png" alt="logo-pequeno" />
                <h2>ZapRecall</h2>
            </div>

            <div className="perguntas">
                <Pergunta mostrarPergunta={props.mostrarPergunta} index={props.index}/>
            </div>


            <div className="bottom-perguntas">
                <h4>0/4 CONCLUÍDOS</h4>
            </div>
        </div>
    )
}