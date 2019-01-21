
import React, { Component, Fragment  } from "react";

import { Route, Switch } from "react-router-dom";
import styles from '../../../css/Login.module.css'
import cx from 'classnames'



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
            <div id="Contact" className={cx(styles["section"],styles["benefits"])}>

                <div className={cx(styles["contact-content"])}>
                    <div className={cx(styles["div-block-3"])}>

                        <p className={cx(styles["p"])}>Please Sign up or Login:</p>
                    </div>

                      { this.state.register ?
                          <div className={cx(styles["form-block-2"],styles["w-form"])}>
                              <form id="email-form" name="email-form" data-name="Email Form" data-w-id="63eb9a0e-b393-5204-c822-0b8c3f3f26dd" style={{opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style": "preserve-3d"}} className={cx(styles["contact-form-block"])}>
                                  <div className={cx(styles["form-short-fields"])}>
                                      <input type="text" className={cx(styles["form-field-half"],styles["w-input"])} maxlength="256" name="Name" data-name="Name" placeholder="Name" id="Name" required=""/>
                                      <input type="text" className={cx(styles["form-field-half"],styles["w-input"])} maxlength="256" placeholder="Email" required=""/>
                                      <input type="password" className={cx(styles["form-field-half"],styles["w-input"])} maxlength="256" name="Number" data-name="Number" placeholder="password" id="Number" required=""/>
                                      <select id="Budget" name="Budget" data-name="Budget" required="" className={cx(styles["form-field-half"],styles["w-select"])}>
                                          <option value="0">Flatiron Status</option>
                                          <option value="student">Student</option>
                                          <option value="Instructor">Instructor</option>
                                          <option value="Graduate">Graduate</option>
                                      </select>
                                  </div>
                                  <textarea id="Message" name="Message" placeholder="Bio" maxlength="5000" data-name="Message" required="" className={cx(styles["form-textarea"],styles["w-input"])}></textarea>
                                  <input type="submit" value="Register" data-wait="Please wait..." className={cx(styles["hero-cta"],styles["w-button"])} style={{"border-radius": 20}}/>
                                  <input type="button"  value="Sign in" onClick={this.changeRegister} data-wait="Please wait..." className={cx(styles["hero-cta"],styles["w-button"])} style={{"border-radius": 20, background: "#ffaae22"}}></input>
                              </form>
                          </div>
                          :
                          <div className={cx(styles["form-block-2"],styles["w-form"])}>
                          <form id="email-form" name="email-form" data-name="Email Form" data-w-id="63eb9a0e-b393-5204-c822-0b8c3f3f26dd" style={{opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style": "preserve-3d"}} className={cx(styles["contact-form-block"])}>
                          <input type="text" className={cx(styles["form-field-half"],styles["w-input"])} maxlength="256" placeholder="Email" required=""/>
                          <input type="password" className={cx(styles["form-field-half"],styles["w-input"])} maxlength="256" name="Number" data-name="Number" placeholder="password" id="Number" required=""/>
                              <input type="submit" value="Sign in " data-wait="Please wait..." className={cx(styles["hero-cta"],styles["w-button"])} style={{"border-radius": 20, width: "50%"}}/>

                              <input type="button" value="Sign Up" onClick={this.changeRegister} data-wait="Please wait..." className={cx(styles["hero-cta"],styles["w-button"])} style={{"border-radius": 20, width: "50%"}}/>

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
