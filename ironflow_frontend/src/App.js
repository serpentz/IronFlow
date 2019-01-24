import React, { Component, Fragment } from "react";
import Login from "./components/registration/login";
import Main from "./components/Main";
import Home from './components/Home'
import Profile from "./components/Profile";
import Question from "./components/QuestionPage";
import {fetchQuestions} from './redux/actions/questions'
import {getProfile} from './redux/actions/user'
import {connect} from 'react-redux'
import Footer from './components/Footer'
import { Route, Switch,withRouter, Redirect } from "react-router-dom";
import AskQuestion from './components/AskQuestion'

import NavBar from './components/NavBar'

class App extends Component {

  componentDidMount(){
    this.props.fetchQuestions()
    if(localStorage.getItem("token")){this.props.getProfile(localStorage.getItem("token"))}
  }
  render() {
    return (
      <Fragment>
       <NavBar />
      <Switch>
        <Route path="/feed/:tag" render={(props)=> <Home category={props.match.params.tag}/>} />
        <Route path="/feed" component={Home} />
        <Route path="/question" component={Question}/>
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Main} />
      </Switch>
      <Footer />
      </Fragment>

    );
  }
}



const mapStateToProps = state => {
  return {
    questions: state.questions.questions
  }
}



export default withRouter(connect(mapStateToProps,{fetchQuestions,getProfile})(App));
