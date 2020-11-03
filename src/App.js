import React from 'react'
import MainMap from './components/MainMap'
import Map from './components/Map'
import LandingPage from './components/LandingPage'
import './App.css'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import QuestionAPI from './components/QuestionAPI'

function App() {

  return (
    <div className="App">

  { <Switch>
      <Route exact path="/" component={LandingPage}></Route>
      <Route path="/map" component={Map}></Route>
  </Switch>  }
  <QuestionAPI />
  </div>
  )
}

export default App;

