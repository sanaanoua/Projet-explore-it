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

  )
}

export default App;
