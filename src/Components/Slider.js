import React, { useState } from 'react'
import QuestionAPI from './QuestionAPI'


 const Slider = () => {
    const [translate, set] = useState(false);
    return (
     
      <div
        id="slider"
        className="slider"
        style={{
          transform: `translateY(${translate ? -320 : 0}px)`,
          transition: "transform 0.5s cubic-bezier(0.61, 1, 0.88, 1)",
        }}
      >
        <div
          className="image-swipe-container"
          onClick={() => {
            set((state) => !state);
            console.log(translate);
          }}
          style={{
            transform: `rotate(${translate ? 270 : 90}deg)`,
            transition: "transform 0.5s cubic-bezier(0.61, 1, 0.88, 1)",
          }}
        ></div>
        <QuestionAPI />
      </div>
    );
}


export default Slider