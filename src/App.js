import React, { Component} from 'react';
import LandingPage from './components/welcome/LandingPage';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import PasswordRecovery from './components/auth/PasswordRecovery';
import Dashboard from './components/dashboard/Dashboard';
import PageNotFound from './components/pages/PageNotFound';

class App extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/sign-in" component={SignIn}/>
          <Route path="/sign-up" component={SignOut}/>
          <Route path="/password-recovery" component={PasswordRecovery}/>
          <Route path="/page-not-found" component={PageNotFound}/>
        </Switch>
      </Router>

    )
  }
}

export default App;
