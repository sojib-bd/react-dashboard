import React from 'react';

import './App.css';
import ResponsiveDrawer from './Components/SideBar/SideBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './Components/SignInPage/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <ResponsiveDrawer />

          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
