import React, { Component} from 'react';
import LandingPage from './components/welcome/LandingPage';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import PasswordRecovery from './components/auth/PasswordRecovery';
import Dashboard from './components/dashboard/Dashboard';
import PageNotFound from './components/pages/PageNotFound';
import Home from './components/welcome/Home';
import Vet from './components/vets/Vet';
import LandingPage1 from './components/welcome/LandingPage1';

class App extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage1}/>
          <Route path="/sign-in" component={SignIn}/>
          <Route path="/sign-up" component={SignOut}/>
          <Route path="/recover-password" component={PasswordRecovery}/>
          <Route path="/page-not-found" component={PageNotFound}/>
          <Route exact path="/"  component={LandingPage}/>
          <Route path="/home" component={Home}/>
          <Route path="/vet" component={Vet}/>
        </Switch>
      </Router>

    )
  }
}

export default App;
