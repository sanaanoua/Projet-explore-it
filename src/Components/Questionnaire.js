import React from "react";

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
        <h2
          className="quiz-question"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="container-quiz-answer  ">
        {shuffledAnswer.map((answer) => (
          <p
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