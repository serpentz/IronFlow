import React, { Component, Fragment } from "react";
import Login from "./components/registration/login";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Question from "./components/QuestionPage";
import {fetchQuestions} from './redux/actions/questions'
import {connect} from 'react-redux'
import { Route, Switch,withRouter } from "react-router-dom";
import AskQuestion from './components/AskQuestion'

import NavBar from './components/NavBar'

class App extends Component {

  componentDidMount(){
    this.props.fetchQuestions()
  }
  render() {
    return (
      <Fragment>
       <NavBar />
      <Switch>
        <Route path="/Registration" component={Login} />
        <Route path="/question" component={Question} />
        <Route path="/ask" component={AskQuestion} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Main} />
      </Switch>
      </Fragment>
    );
  }
}







export default withRouter(connect(null,{fetchQuestions})(App));
