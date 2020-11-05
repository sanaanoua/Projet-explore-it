import React, { Component } from 'react'
import QuestionAPI from './QuestionAPI'

 class Slider extends Component {
   state = { visible : false };

    handleClick = () => {
    this.setState({ visible: !this.state.visible}); 
    }

    render() {
        const buttonText= this.state.visible ? 'return' : 'Get quiz'; 
        const slider = this.state.visible ? <QuestionAPI /> : null ;
    return (
     <div className="slider" >
                 
            <button
                onClick={this.handleClick}
            >   
                {slider}  
                {buttonText}
            </button>
     
     </div>);
    } 
}


export default Slider