import React, { useState } from "react";
import QuestionAPI from "./QuestionAPI";

const Slider = (props) => {
  
  return (
    <div
      id="slider"
      className="slider"
      style={{
        transform: `translateY(${props.isQuizAvailable ? -320 : 0}px)`,
        transition: "transform 0.5s cubic-bezier(0.61, 1, 0.88, 1)",
      }}
    >
      <div
        className="image-swipe-container"
        style={{
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
