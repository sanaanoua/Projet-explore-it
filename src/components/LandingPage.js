import React from 'react'
import Card from './Card'
import logotravel from './img/logotravel.png'


class LandingPage extends React.Component {

render() {

return (
<div className="Container">
        <img className="logo" src={logotravel} alt="" /> 
        <Card />    
</div>
)
} 
}
export default LandingPage; 