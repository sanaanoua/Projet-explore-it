import React, { Component } from 'react'
import LandingPage from './components/LandingPage'
import './App.css'
import { BrowserRouter} from 'react-router-dom'
export class App extends Component {

  render() {
    return (
   <BrowserRouter>
      <div className="App">
      <LandingPage />
      </div>
   
   </BrowserRouter>
    )
  }
}

export default App
