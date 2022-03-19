import React from "react";
import QuestionsTop from "./QuestionsTop";
import Question from "./Question";
import Bottom from "./Bottom";

import embaralhar from "./embaralhar";

export default function QuestionsScreen(props) {
    const {deck} = props;
    embaralhar(deck);

    const [answeredQuestions, setAnsweredQuestions] = React.useState(0);
    const [answeredQuestionsIcons, setAnsweredQuestionsIcons] = React.useState([]);

    function addAnsweredQuestion(choice){
        setAnsweredQuestions(answeredQuestions + 1);
        setAnsweredQuestionsIcons([...answeredQuestionsIcons, choice]);
    }

    return (
        <div className="questions-screen">
            <QuestionsTop />

            <div className="questions">
                {deck.map((card, index) => {
                    return (
                        <Question 
                            key={index + 1} 
                            card={card} 
                            index={index + 1} 
                            addAnsweredQuestion={addAnsweredQuestion} 
                        />
                    )
                })}
            </div>

            <Bottom answeredQuestions={answeredQuestions} totalQuestions={deck.length} answeredIcons={answeredQuestionsIcons} />
        </div>
    )
}