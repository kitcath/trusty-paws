import React, { Component} from 'react';
import LandingPage from './components/welcome/LandingPage';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <Router>
        <LandingPage/>
      </Router>

    )
  }
}

export default App;
