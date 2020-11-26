import React, { useState } from "react";

const Questionnaire = ({
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
}) => {
  const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );
  

  return (
    <div className="container-quiz">
      <div className="container-quiz-question">
        <p
          className="quiz-question"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="container-quiz-answer  ">
        {shuffledAnswer.map((answer,i) => (
          <button
            key={i}
            className="quiz-answer"
            onClick={() => handleAnswer(answer)}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
        
      </div>
    </div>
  );
};
export default Questionnaire;