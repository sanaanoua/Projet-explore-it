<<<<<<< HEAD
import React from 'react';
import './App.css';
import LandingPage from './Components/LandingPage';
import { Switch,Route} from 'react-router-dom';
import QuestionAPI from './Components/QuestionAPI';
import MapPage from './Components/MapPage';


function App() {
  
  return (
    <div className="App">
    
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/mappage" component={MapPage}></Route>
        {/* <Route  path="/questionAPI" component={QuestionAPI}></Route> */}
      </Switch>
    
    </div>

=======
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
>>>>>>> d40cbbc6c9f6f5ae896e66d2bdf99b53754d104a
  )
}

export default App;
<<<<<<< HEAD
=======

>>>>>>> d40cbbc6c9f6f5ae896e66d2bdf99b53754d104a
