import Icon from "./Icon";

export default function BottomResult(props) {
    const {answeredQuestions, totalQuestions, answeredIcons, resultTitle, resultMessage, img, imgAlt} = props;
    return (
        <div className="bottom-end-questions">
            <div className="result">
                <img src={img} alt={imgAlt} />
                <h2>{resultTitle}</h2>
            </div>
            <h4>{resultMessage}</h4>
            <div className="bottom-questions-result">
                <h4>{answeredQuestions}/{totalQuestions} CONCLUÍDOS</h4>
                <div className="bottom-icons">
                    {answeredIcons.map((choice, index) => <Icon key={index} choice={choice} />)}
                </div>
            </div>
        </div>
    )
}