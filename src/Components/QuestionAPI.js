import React, { useState, useEffect } from 'react'  
import   Questionnaire  from './Questionnaire'
const API_URL = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple';

 function QuestionAPI() {

    const [question, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0); 
    
    useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
        setQuestions(data.results);
    });
    }, []);

    const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    
    if (answer === question[currentIndex].
    correct_answer)
    {
        setScore(score + 1 );
    }
    };

return  question.length > 0 ? (
        <div className="question">
        {currentIndex >= question.length ? (
            <h1 className="textquestion"> 
            Your score was {score}
            </h1>
    ) : (
        <Questionnaire 
            data={question[currentIndex]} 
            handleAnswer={handleAnswer} 
        />
    )}
        </div> 
    ) : (
        <h2 className="text-2xl text-purple 
        font-bold" >Loading... </h2>
       
    );
}
export default QuestionAPI;