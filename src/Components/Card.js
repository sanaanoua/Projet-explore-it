import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image_girl from './Assets/girl_travel.jpg';
import Button from './Button';

class Card extends Component {
        constructor(props){
                super(props);
                this.state = { 
                        tripHour : null
                }
                this.handleClick= this.handleClick.bind(this);
        }
     
     handleClick(time, e){
             console.log(time)
             console.log(e);
             this.setState({ tripHour: time  })
             console.log("hello from card ", this.state.tripHour);
     }
        
     render(){
        return (
                <div className="card"> 
                        <img className="card_image" src={image_girl} alt="girl_travel"/>
                        <div className="content">
                                <div className="card_title">
                                        <h1>Temps de découverte</h1>
                                </div>
                                
                                <div className="button_container">
                                        <Button time={1} handleClick={this.handleClick}></Button>
                                        <Button time={2} handleClick={this.handleClick}></Button>
                                        <Button time={4} handleClick={this.handleClick}></Button>
                                </div>    
                                <Link to={{
                                        pathname: "/MapPage",
                                        state: {
                                           tripTime: this.state.tripHour
                                        }}
                                }> <button className="button_parcours">Genere ton parcours</button>
                                </Link>
                        </div>
                </div>
        )
    }        
}
export default Card; 