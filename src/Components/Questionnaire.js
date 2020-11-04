import React, { Component } from 'react'
import { Link } from 'react-router-dom';


    const QuestionnaireJs = ({
        handleAnswer,
        data: { question, correct_answer,
        incorrect_answers},
        }) => {
    const shuffledAnswer =
        [correct_answer,
        ... incorrect_answers].sort(() => Math.random()- 0.5);

    return (
    <div className='quizDiv'>
        <div className='txtQuestion' >
            <h2
                dangerouslySetInnerHTML={{ __html:
                question }}
            />
        </div>
        <div className="grid ">
           {shuffledAnswer.map((answer) => (
            <button
                className ={''}
                onClick={()=> handleAnswer
                (answer)}
                dangerouslySetInnerHTML={{ __html:
                answer}} />
            ))}
        </div>
        {/* <div>
            <Link to="/mappage">
            <button>Return</button>
            </Link>
        </div> */}
    </div>
);
}
export default QuestionnaireJs;