import React, { Component } from 'react'


    const QuestionnaireJs = ({
        handleAnswer, 
        data: { question, correct_answer, 
        incorrect_answers},
        }) => {
    const shuffledAnswer = 
        [correct_answer,
        ... incorrect_answers].sort(() => Math.random()- 0.5); 
    
    return (
    <div className="questionapi" >
        <div className="titlequest rounded-lg shadow-md  p-10" >
            <h2 
                className="text-2xl" 
                dangerouslySetInnerHTML={{ __html:
                question }}
            />
        </div>
        <div className="grid  "> 
           {shuffledAnswer.map((answer) => (
            <button
                className ={ "bg-white p-4 text-purple-800 font-semibold rounded shadow"}
                onClick={()=> handleAnswer 
                (answer)} 
                dangerouslySetInnerHTML={{ __html:
                answer}} />
            ))}
        </div>
    </div>
);
}
export default QuestionnaireJs; 





