import { useCallback, useState } from 'react';

import Question from './Question.jsx';
import QUESTIONS from '../questions.js';
import Summary from './Summary.jsx';


export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    //derived state for current question index
    const activeQuestionIndex = userAnswers.length;

    //check if quiz is over
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer) {

        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });

    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if (quizIsComplete) {
        return (
            <Summary userAnswers={userAnswers} />
        )
    }



    return (
        <div id="quiz">
            <Question
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
            />
        </div>

    )
}