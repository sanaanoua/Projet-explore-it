import React from 'react';
<<<<<<< HEAD
=======
import { BrowserRouter } from 'react-router-dom'
>>>>>>> d40cbbc6c9f6f5ae896e66d2bdf99b53754d104a
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import {BrowserRouter } from 'react-router-dom';

ReactDOM.render(

  <BrowserRouter>
     <App />
  </BrowserRouter>,
  document.getElementById('root')
  
=======

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
>>>>>>> d40cbbc6c9f6f5ae896e66d2bdf99b53754d104a
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
