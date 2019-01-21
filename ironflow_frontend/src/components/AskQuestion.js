
import React, { Component, Fragment } from "react";

import { Route, Switch, withRouter } from "react-router-dom";
import {connect} from "react-redux"
import {createQuestion} from '../redux/actions/questions'
import styles from '../css/Login.module.css'
import cx from 'classnames';



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
        <div style={{height: "100%",backgroud: "#000"}} >
            <div id="Contact" className={cx(styles["section"],styles["benefits"])}>

                <div className={cx(styles["contact-content"])}>
                    <div className={cx(styles["div-block-3"])}>

                        <p className={cx(styles["p"])}>ASK your Question:</p>
                    </div>

                    <div className={cx(styles["form-block-2"],styles["w-form"])}>
                        <form onSubmit={this.handleSubmit} id="email-form" name="email-form" data-name="Email Form" data-w-id="63eb9a0e-b393-5204-c822-0b8c3f3f26dd" style={{opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style": "preserve-3d"}} className={cx(styles["contact-form-block"])}>
                            <div className={cx(styles["form-short-fields"])}>
                                <input type="text" className={cx(styles["form-field-half"],styles["w-input"])} maxlength="256" name="category" data-name="Name" placeholder="Category" onChange={this.handleChange} id="Name" required=""/>
                            </div>
                            <textarea id="Message" name="statement" onChange={this.handleChange} placeholder="Question" maxlength="5000" data-name="Message" required="" className={cx(styles["form-textarea"],styles["w-input"])}></textarea>
                            <input type="submit" value="Ask" data-wait="Please wait..." className={cx(styles["hero-cta"],styles["w-button"],styles["contact-form-button"])} style={{"border-radius": 20, width: "50%"}}/>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}




export default connect(null,{createQuestion})(AskQuestion)
