// Importing React
import React, { Component } from 'react';

//Renaming BrowserRtouter to Router
//Switch guarantees that we won't accidentally show multiple Routes at once
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'

//Importing components
import HomePage from './components/home/HomePage'
import LoginPage from './components/login/LoginPage'
import RidePage from './components/ride/RidePage'
//import BikePage from './components/bike/BikePage'
import UserProfile from './components/user/UserProfile'



class App extends Component {
  render() {
    return (
      <Router>
        {/* Router only allows one child component, so we wrap everything in a div. */}
        <div>
          {/* Anything outside of Switch is global and available in every view */}
          {/* This is where I can add a NavBar or footer, so that it will be shown on every page */}
          <Switch>

            <Route exact path='/' component={HomePage} />
            <Route exact path='/users' component={LoginPage} />
            <Route exact path='/users/:userId/rides' component={RidePage} />
            <Route exact path='/users/:userId/bikes' />
            <Route exact path='/users/:userId' component={UserProfile}/>
        
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
