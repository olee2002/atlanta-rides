// Importing React
import React, { Component } from 'react';

//Renaming BrowserRtouter to Router
//Switch guarantees that we won't accidentally show multiple Routes at once
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Importing Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




//Importing components
import HomePage from './components/home/HomePage'
import LoginPage from './components/login/LoginPage'
import UserProfile from './components/user/UserProfile'



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          {/* Router only allows one child component, so we wrap everything in a div. */}
          <div>
            {/* Anything outside of Switch is global and available in every view */}
            {/* This is where I can add a NavBar or footer, so that it will be shown on every page */}
            <Switch>

              <Route exact path='/' component={HomePage} />
              <Route exact path='/users' component={LoginPage} />
              <Route exact path='/users/:userId' component={UserProfile} />

            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
