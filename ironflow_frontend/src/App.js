import React, { Component, Fragment } from "react";
import Login from "./components/registration/login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <Fragment>
       <NavBar />
      <Switch>
        <Route path="/Registration" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Home} />
      </Switch>
      </Fragment>
    );
  }
}

export default App;
