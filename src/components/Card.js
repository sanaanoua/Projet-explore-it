import React from 'react'
import {  Link } from 'react-router-dom'

class Card extends React.Component {
        render() {
                return (
                        <div className="Card"> 
                                <img className="image"  src="image.jpg" />
                                <div className="Content">
                                        <h1>Temps de découverte</h1>
                                        <div className="btn">
                                                <button>1H</button>  
                                                <button>2H</button>  
                                                <button>4H</button>  
                                        </div>    
                                        <Link to="/Check" ><p>Génerer votre parcours</p></Link>
                                </div>
                        </div>
)
} 
}
export default Card; 