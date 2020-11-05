import React from 'react';


function Button({ time, handleClick }) {

    return(
        <button className="button_time" onClick={(e) => handleClick(time,e)}> {time}h </button>
    )
}

export default Button;