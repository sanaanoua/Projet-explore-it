import React from 'react';
import { Link } from 'react-router-dom';
import image_girl from './Assets/girl_travel.jpg';
import Button from './Button';

function Card() {
        
        

        return (
                <div className="card"> 
                        <img className="card_image" src={image_girl} alt="girl_travel"/>
                        <div className="content">
                                <div className="card_title">
                                        <h1>Temps de découverte</h1>
                                </div>
                                
                                <div className="button_container">
                                        <Button time={1}></Button>
                                        <Button time={2}></Button>
                                        <Button time={4}></Button>
                                </div>    
                                <Link to="/mappage"                       
                                 > <button className="button_parcours">Generer votre parcours</button>
                                </Link>
                        </div>
                </div>
        )
            
}
export default Card; 