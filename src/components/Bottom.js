import Icon from "./Icon";
import party from "./../assets/party.png";
import sad from "./../assets/sad.png";

export default function Bottom(props) {
    const {answeredQuestions, totalQuestions, answeredIcons} = props;

    if (answeredQuestions < totalQuestions){
        return (
            <div className="bottom-questions">
                <h4>{answeredQuestions}/{totalQuestions} CONCLUÍDOS</h4>
                <div className="bottom-icons">
                    {answeredIcons.map((choice, index) => <Icon key={index} choice={choice} />)}
                </div>
            </div>
        )
    } else {
        if (answeredIcons.includes("error")){
            return (
                <div className="bottom-end-questions">
                    <div className="result">
                        <img src={sad} alt="sad" />
                        <h2>PUTZ!</h2>
                    </div>
                    <h4>Ainda faltaram alguns... Mas não desanime!</h4>
                    <div className="icons-bottom">
                        {answeredIcons.map((choice, index) => <Icon key={index} choice={choice} />)}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="bottom-end-questions">
                    <div className="result">
                        <img src={party} alt="party" />
                        <h2>PARABÉNS!</h2>
                    </div>
                    <h4>Você não esqueceu de nenhum flashcard!</h4>
                    <div className="icons-bottom">
                        {answeredIcons.map((choice, index) => <Icon key={index} choice={choice} />)}
                    </div>
                </div>
            )
        }
        
    }
}