
import React, { Component, Fragment } from "react";

import { Route, Switch, withRouter } from "react-router-dom";
import {connect} from "react-redux"
import {createQuestion} from '../redux/actions/questions'
import '../css/Login.css'



class AskQuestion extends Component {

    state = {
        register: true,
        question: {
            statement: "",
            category: ""
        }

    }

  handleChange = (e) => {
    this.setState({...this.state, question: {...this.state.question, [e.target.name]: e.target.value}})
  }

    handleSubmit = (e) => {
      e.preventDefault()

          this.props.createQuestion(this.state.question)
    }
  render() {
    return (
        <div style={{height: "100%"}}>
            <div id="Contact" className="section benefits">

                <div className="contact-content">
                    <div className="div-block-3">

                        <p className="p">ASK your Question:</p>
                    </div>

                    <div className="form-block-2 w-form">
                        <form onSubmit={this.handleSubmit} id="email-form" name="email-form" data-name="Email Form" data-w-id="63eb9a0e-b393-5204-c822-0b8c3f3f26dd" style={{opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style": "preserve-3d"}} className="contact-form-block">
                            <div className="form-short-fields">
                                <input type="text" className="form-field-half w-input" maxlength="256" name="category" data-name="Name" placeholder="Category" onChange={this.handleChange} id="Name" required=""/>
                            </div>
                            <textarea id="Message" name="statement" onChange={this.handleChange} placeholder="Question" maxlength="5000" data-name="Message" required="" className="form-textarea w-input"></textarea>
                            <input type="submit" value="Ask" data-wait="Please wait..." className="hero-cta w-button" style={{"border-radius": 20, width: "50%"}}/>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}




export default connect(null,{createQuestion})(AskQuestion)
