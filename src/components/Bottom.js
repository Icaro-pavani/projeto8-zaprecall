import Icone from "./Icone";

export default function Bottom(props) {
    const {perguntasRespondidas, totalPerguntas, iconesRespondidas} = props;

    if (perguntasRespondidas < totalPerguntas){
        return (
            <div className="bottom-perguntas">
                <h4>{perguntasRespondidas}/{totalPerguntas} CONCLUÍDOS</h4>
                <div className="icones-bottom">
                    {iconesRespondidas.map((escolha, index) => <Icone key={index} acuracia={escolha} />)}
                </div>
            </div>
        )
    } else {
        if (iconesRespondidas.includes("erro")){
            return (
                <div className="bottom-fim-perguntas">
                    <div className="resultado">
                        <img src="imagens/sad.png" alt="sad" />
                        <h2>PUTZ!</h2>
                    </div>
                    <h4>Ainda faltaram alguns... Mas não desanime!</h4>
                    <div className="icones-bottom">
                        {iconesRespondidas.map((escolha, index) => <Icone key={index} acuracia={escolha} />)}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="bottom-fim-perguntas">
                    <div className="resultado">
                        <img src="imagens/party.png" alt="party" />
                        <h2>PARABÉNS!</h2>
                    </div>
                    <h4>Você não esqueceu de nenhum flashcard!</h4>
                    <div className="icones-bottom">
                        {iconesRespondidas.map((escolha, index) => <Icone key={index} acuracia={escolha} />)}
                    </div>
                </div>
            )
        }
        
    }
}