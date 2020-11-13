import React, { useState } from "react";
import QuestionAPI from "./QuestionAPI";

const Slider = (props) => {
  const [show, isShow ] = useState(false);
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
      <div
        className="image-swipe-container"
        onClick={() => {
          isShow((state) => !state)
        }}
        style={{
          //transform: `rotate(${show ? 270 : 90}deg)`,
          transform: `rotate(${props.isQuizAvailable ? 270 : 90}deg)`,
          transition: "transform 0.5s cubic-bezier(0.61, 1, 0.88, 1)",
        }}
      ></div>
      <QuestionAPI 
        isQuizAvailable={props.isQuizAvailable}
        handleIsQuizAvailable={props.handleIsQuizAvailable}/>
    </div>
  );
};

export default Slider;
