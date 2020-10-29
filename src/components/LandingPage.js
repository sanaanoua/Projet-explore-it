import React from 'react'
import Card from './Card'
import {  Link } from 'react-router-dom'

class LandingPage extends React.Component {

render() {

return (
<div className="Container">
        <img className="logo" src="logotravel.png" /> 
        <Card />
</div>
)
} 
}
export default LandingPage; 