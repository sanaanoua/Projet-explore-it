import React, { useState } from "react";
import QuestionAPI from "./QuestionAPI";

const Slider = (props) => {
  const [show, isShow] = useState(false);
  return (
    <div
      id="slider"
      className="slider"
      style={{
        //transform: `translateY(${show ? -320 : 0}px)`,
        transform: `translateY(${props.isQuizAvailable ? -320 : 0}px)`,
        transition: "transform 0.5s cubic-bezier(0.61, 1, 0.88, 1)",
      }}
    >
      <div className="image-swipe-container"></div>
      <QuestionAPI
        isQuizAvailable={props.isQuizAvailable}
        handleNextStep={props.handleNextStep}
      />
    </div>
  );
};

export default Slider;
