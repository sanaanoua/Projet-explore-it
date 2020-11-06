import React, { Component } from 'react'


    const Questionnaire = ({
        handleAnswer, 
        data: { question, correct_answer, 
        incorrect_answers},
        }) => {
    const shuffledAnswer = 
        [correct_answer,
        ... incorrect_answers].sort(() => Math.random()- 0.5); 
    
    return (
    <div  className="container_quiz">
            <h2 
                className="quiz_question" 
                dangerouslySetInnerHTML={{ __html:
                question }}
            />
        
        <div className="container_quiz_answer  "> 
           {shuffledAnswer.map((answer) => (
            <button
                className="quiz_answer"
                onClick={()=> handleAnswer 
                (answer)} 
                dangerouslySetInnerHTML={{ __html:
                answer}} />
            ))}
        </div>
    </div>
);
}
export default Questionnaire; 