import React, { Component } from 'react'
import QuestionAPI from './QuestionAPI'

 class Slider extends Component {
   state = { visible : false };

    handleClick = () => {
    this.setState({ visible: !this.state.visible}); 
    }

    render() {
        // handle the show on and off the slider
        const changeClassNameButton = this.state.visible ? 'button_to_hide' : 'button_to_show';
        const changeClassNameSlider = this.state.visible ? "slider_activated" : "slider"
        const slider = this.state.visible ? <QuestionAPI /> : null ;
    return (
     <div className={changeClassNameSlider}>
           
            <button className={changeClassNameButton}
                onClick={this.handleClick}>   
            </button>
            {slider}
     </div>
     );
    } 
}


export default Slider