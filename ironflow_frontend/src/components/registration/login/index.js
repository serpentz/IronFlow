
import React, { Component, Fragment  } from "react";

import { Route, Switch } from "react-router-dom";
import '../../../css/Login.css'



class Login extends Component {

    state = {
        register: false
    }

    changeRegister = () => {

          this.setState({register: !this.state.register})
    }
  render() {

      return (
        <div style={{height: "100%"}}>
            <div id="Contact" className="section benefits">

                <div className="contact-content">
                    <div className="div-block-3">

                        <p className="p">Please Sign up or Login:</p>
                    </div>

                      { this.state.register ?
                          <div className="form-block-2 w-form">
                              <form id="email-form" name="email-form" data-name="Email Form" data-w-id="63eb9a0e-b393-5204-c822-0b8c3f3f26dd" style={{opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style": "preserve-3d"}} className="contact-form-block">
                                  <div className="form-short-fields">
                                      <input type="text" className="form-field-half w-input" maxlength="256" name="Name" data-name="Name" placeholder="Name" id="Name" required=""/>
                                      <input type="text" className="form-field-half w-input" maxlength="256" placeholder="Email" required=""/>
                                      <input type="password" className="form-field-half w-input" maxlength="256" name="Number" data-name="Number" placeholder="password" id="Number" required=""/>
                                      <select id="Budget" name="Budget" data-name="Budget" required="" className="form-field-half w-select">
                                          <option value="0">Flatiron Status</option>
                                          <option value="student">Student</option>
                                          <option value="Instructor">Instructor</option>
                                          <option value="Graduate">Graduate</option>
                                      </select>
                                  </div>
                                  <textarea id="Message" name="Message" placeholder="Bio" maxlength="5000" data-name="Message" required="" className="form-textarea w-input"></textarea>
                                  <input type="submit" value="Register" data-wait="Please wait..." className="hero-cta w-button" style={{"border-radius": 20}}/>
                                  <input type="button"  value="Sign in" onClick={this.changeRegister} data-wait="Please wait..." className="hero-cta w-button" style={{"border-radius": 20, background: "#ffaae22"}}></input>
                              </form>
                          </div>
                          :
                          <div className="form-block-2 w-form">
                          <form id="email-form" name="email-form" data-name="Email Form" data-w-id="63eb9a0e-b393-5204-c822-0b8c3f3f26dd" style={{opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style": "preserve-3d"}} className="contact-form-block">
                          <input type="text" className="form-field-half w-input" maxlength="256" placeholder="Email" required=""/>
                          <input type="password" className="form-field-half w-input" maxlength="256" name="Number" data-name="Number" placeholder="password" id="Number" required=""/>
                              <input type="submit" value="Sign in " data-wait="Please wait..." className="hero-cta w-button" style={{"border-radius": 20, width: "50%"}}/>

                              <input type="button" value="Sign Up" onClick={this.changeRegister} data-wait="Please wait..." className="hero-cta w-button" style={{"border-radius": 20, width: "50%"}}/>

                          </form>
                      </div>
                    }
      </div>
      </div>
      </div>
)
  }
}

export default Login;
