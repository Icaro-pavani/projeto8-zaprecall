import Icon from "./Icon";

export default function ProgressBottom(props) {
    const {answeredQuestions, totalQuestions, answeredIcons} = props;

    return (
        <div className="bottom-questions">
            <h4>{answeredQuestions}/{totalQuestions} CONCLUÍDOS</h4>
            <div className="bottom-icons">
                {answeredIcons.map((choice, index) => <Icon key={index} choice={choice} />)}
            </div>
        </div>
    )
}