import React, { Component } from 'react'
import QuestionAPI from './QuestionAPI'

 class Slider extends Component {
   state = { visible : false };

    render() {
        const buttonText= this.state.visible ? 'return' : 'Get quiz'; 
        const slider = this.state.visible ? <QuestionAPI /> : null ;
    return (
     <div className="slider" >
                {slider}   
            <button
                onClick={() => {
                this.setState({ visible: !this.state.visible}); 
            }}
            >
                {buttonText}
            </button>
     
     </div>);
    } 
}


export default Slider