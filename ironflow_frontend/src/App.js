import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
    <div className="collaborate-wrap">
        <div className="hero-collaborate"></div>
        <div className="w-container">
            <div className="form-wrapper w-form">
                <form id="email-form" name="email-form" >
                    <div data-animation="cross" data-duration="200" data-disable-swipe="1" data-hide-arrows="1" className="step-paginator w-slider">
                        <div className="mask w-slider-mask">
                            <div className="step w-slide" style={{transform: "translateX(-3720px)", opacity: 1, visibility: 'hidden'}}>
                                <div className="collaborate-form-step">
                                    <div data-ix="show-content-onslide" className="step-counter" style={{opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none", transition: "opacity 500ms ease 0s, transform 500ms ease 0s"}}>1/5</div>
                                    <div className="form-content">
                                        <div data-ix="show-content-onslide" className="form-section-title" style={{opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none", transition: "opacity 500ms ease 0s, transform 500ms ease 0s"}}>Please fill in your details</div>
                                        <div data-ix="show-content-onslide" className="form-title-line" style={{opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none", transition: "opacity 500ms ease 0s, transform 500ms ease 0s"}}></div>
                                        <input type="text" className="field w-input" autofocus="true" maxlength="256" name="Name" data-name="Name" data-ix="show-content-onslide" placeholder="1st Participant Name" id="Name" required="" style={{transition: "border 0.2s ease-in 0s, opacity 500ms ease 0s, transform 500ms ease 0s", opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none"}}/>
                                        <input type="text" className="field w-input" autofocus="true" maxlength="256" name="Roll-Number" data-name="Roll Number" data-ix="show-content-onslide" placeholder="Roll No.of 1st Participant" id="Roll-Number" required="" style={{transition: "border 0.2s ease-in 0s, opacity 500ms ease 0s, transform 500ms ease 0s", opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none"}}/>
                                        <input type="text" className="field w-input" autofocus="true" maxlength="256" name="Name-2" data-name="Name 2" data-ix="show-content-onslide" placeholder="2nd Participant Name" id="Name-2" required="" style={{transition: "border 0.2s ease-in 0s, opacity 500ms ease 0s, transform 500ms ease 0s", opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none"}}/>
                                        <input type="text" className="field w-input" autofocus="true" maxlength="256" name="Roll-Number-2" data-name="Roll Number 2" data-ix="show-content-onslide" placeholder="Roll No.of 2nd Participant" id="Roll-Number-2" required="" style={{transition: "border 0.2s ease-in 0s, opacity 500ms ease 0s, transform 500ms ease 0s", opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none"}}/>
                                        <input type="text" className="field w-input" autofocus="true" maxlength="256" name="Name-3" data-name="Name 3" data-ix="show-content-onslide" placeholder="3rd Participant Name" id="Name-3" required="" style={{transition: "border 0.2s ease-in 0s, opacity 500ms ease 0s, transform 500ms ease 0s", opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none"}}/>
                                        <input type="text" className="field w-input" autofocus="true" maxlength="256" name="Roll-Number-3" data-name="Roll Number 3" data-ix="show-content-onslide" placeholder="Roll No.of 3rd Participant" id="Roll-Number-3" required="" style={{transition: "border 0.2s ease-in 0s, opacity 500ms ease 0s, transform 500ms ease 0s", opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none"}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="step w-slide" style={{transform: "translateX(-3720px)", opacity: 1, 'z-index': 1, visibility: "hidden"}}>
                                <div className="collaborate-form-step">
                                    <div className="form-content">
                                        <div data-ix="show-content-onslide" className="form-section-title" style={{opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none", transition: "opacity 500ms ease 0s, transform 500ms ease 0s"}}>Academic Details</div>
                                        <div data-ix="show-content-onslide" className="form-title-line" style={{opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none", transition: "opacity 500ms ease 0s, transform 500ms ease 0s"}}></div>
                                        <textarea className="field area w-input" autofocus="true" maxlength="5000" name="class-and-division" data-name="class and division" data-ix="show-content-onslide" placeholder="Class and Division of all the Participants (separate it by '/', example:- syit-A/syit-B/syit-C)" id="class-and-division" required="" style={{transition: "border 0.2s ease-in 0s, opacity 500ms ease 0s, transform 500ms ease 0s", opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none"}}></textarea>
                                        <input type="text" className="field w-input" autofocus="true" maxlength="256" name="department" data-name="department" data-ix="show-content-onslide" placeholder="Which Department are you from??" id="department" required="" style={{transition: "border 0.2s ease-in 0s, opacity 500ms ease 0s, transform 500ms ease 0s", opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none"}}/>
                                    </div>
                                    <div data-ix="show-content-onslide" className="step-counter" style={{opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none", transition: "opacity 500ms ease 0s, transform 500ms ease 0s"}}>2/5</div>
                                </div>
                            </div>
                            <div className="step w-slide" style={{transform: "translateX(-3720px)", opacity: 1, 'z-index': 2, visibility: 'hidden'}}>
                                <div className="collaborate-form-step">
                                    <div className="form-content">
                                        <div data-ix="show-content-onslide" className="form-section-title" style={{opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none", transition: "opacity 500ms ease 0s, transform 500ms ease 0s"}}>How can I help you?</div>
                                        <div data-ix="show-content-onslide" className="form-title-line" style={{opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none", transition: "opacity 500ms ease 0s, transform 500ms ease 0s"}}></div>
                                        <input type="text" className="field w-input" autofocus="true" maxlength="256" name="Phone-Number" data-name="Phone Number" data-ix="show-content-onslide" placeholder="Mob-Number (any one of the participant)" id="Phone-Number" required="" style={{transition: "border 0.2s ease-in 0s, opacity 500ms ease 0s, transform 500ms ease 0s", opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none"}}/>
                                        <input type="email" className="field w-input" autofocus="true" maxlength="256" name="mail" data-name="mail" data-ix="show-content-onslide" placeholder="Email ID (any one of the participant)" id="mail" required="" style={{transition: "border 0.2s ease-in 0s, opacity 500ms ease 0s, transform 500ms ease 0s", opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none"}}/>
                                    </div>
                                    <div data-ix="show-content-onslide" className="step-counter" style={{opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none", transition: "opacity 500ms ease 0s, transform 500ms ease 0s"}}>3/5</div>
                                </div>
                            </div>
                            <div className="step w-slide" style={{transform: "translateX(-3720px)", opacity: 1, 'z-index': 3, visibility: 'hidden'}}>
                                <div className="collaborate-form-step">
                                    <div className="form-content">
                                        <div data-ix="show-content-onslide" className="form-section-title" style={{opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none", transition: "opacity 500ms ease 0s, transform 500ms ease 0s"}}>Specify your Team a name</div>
                                        <div data-ix="show-content-onslide" className="form-title-line" style={{opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none", transition: "opacity 500ms ease 0s, transform 500ms ease 0s"}}></div>
                                        <input type="text" className="field w-input" autofocus="true" maxlength="256" name="team-name" data-name="team name" data-ix="show-content-onslide" placeholder="Team Name" id="team-name" required="" style={{transition: "border 0.2s ease-in 0s, opacity 500ms ease 0s, transform 500ms ease 0s", opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none"}}/>
                                    </div>
                                    <div data-ix="show-content-onslide" className="step-counter" style={{opacity: 0, transform: "translateX(0px) translateY(20px) translateZ(0px)", display: "none", transition: "opacity 500ms ease 0s, transform 500ms ease 0s"}}>4/5</div>
                                </div>
                            </div>
                            <div className="step w-slide" style={{transform: "translateX(-3720px)", opacity: 1, 'z-index': 4, transition: "opacity 200ms ease 0s"}}>
                                <div className="collaborate-form-step">
                                    <div className="form-content final">
                                        <div data-ix="show-content-onslide" className="form-section-title" style={{opacity: 1, transform: "translateX(0px) translateY(0px) translateZ(0px)", display: "block", transition: "opacity 500ms ease 0s, transform 500ms ease 0s"}}>Alternate Phone Number and mail ID</div>
                                        <div data-ix="show-content-onslide" className="form-title-line" style={{opacity: 1, transform: "translateX(0px) translateY(0px) translateZ(0px)", display: "block", transition: "opacity 500ms ease 0s, transform 500ms ease 0s"}}></div>
                                        <input type="text" className="field w-input" maxlength="256" name="phone-number" data-name="phone number" data-ix="show-content-onslide" placeholder="Alternate mobile number (any one of the participant)" id="phone-number-2" required="" style={{transition: 'border 0.2s ease-in 0s, opacity 500ms ease 0s, transform 500ms ease 0s', opacity: 1, transform: "translateX(0px) translateY(0px) translateZ(0px)", display: "block"}}/>
                                        <input type="submit" value="Send Form" data-wait="Calculating Nash Equilibrium..." wait="Calculating Nash Equilibrium..." data-ix="show-content-onslide" className="submit-button w-button" style={{transition: "background-color 0.2s ease-in 0s, box-shadow 0.2s ease-in 0s, opacity 500ms ease 0s, transform 500ms ease 0s", opacity: 1, transform: "translateX(0px) translateY(0px) translateZ(0px)", display: "block"}}/>
                                        <input type="email" className="field w-input" autofocus="true" maxlength="256" name="email" data-name="email" data-ix="show-content-onslide" placeholder="Alternate Mail ID (any one of the participant)" id="email" required="" style={{transition: 'border 0.2s ease-in 0s, opacity 500ms ease 0s, transform 500ms ease 0s', opacity: 1, transform: "translateX(0px) translateY(0px) translateZ(0px)", display: "block"}}/>
                                        <div className="extra-option-wrap">
                                            <div className="checkbox-wrapper checkbox-square w-checkbox">
                                                <input type="checkbox" id="Shared-Equity-Models" name="Shared-Equity-Models" data-name="Shared Equity Models" data-ix="checkbox-ticker" className="checkbox-ticker w-checkbox-input"/>
                                                <label for="Shared-Equity-Models" className="checkbox-label no-label w-form-label"></label>
                                                <div className="checkbox-active-overlay square-overlay"></div>
                                            </div>
                                            <div>I agree to the terms and conditions of Computer Association Events.</div>
                                        </div>
                                    </div>
                                    <div data-ix="show-content-onslide" className="step-counter" style={{opacity: 1, transform: "translateX(0px) translateY(0px) translateZ(0px)", display: "block", transition: "opacity 500ms ease 0s, transform 500ms ease 0s"}}>5/5</div>
                                </div>
                            </div>
                        </div>
                        <div className="previous w-slider-arrow-left" style={{}}>
                            <div className="previous-button">← Back</div>
                        </div>
                        <div className="next w-slider-arrow-right" style={{display: "none"}}>
                            <div className="next-button">Next Page</div>
                        </div>
                    </div>
                </form>
                <div className="success-message w-form-done">
                    <div>Thanks! I have received your form submission, I'll get back to you shortly!</div>
                </div>
                <div className="error-message w-form-fail">
                    <div>Oops! Something went wrong while submitting the form</div>
                </div>
            </div>
        </div>
        <div className="social">COMPUTER ASSOCIATION TEAM</div>
    </div>
    <script src="https://d1tdp7z6w94jbb.cloudfront.net/js/jquery-3.3.1.min.js" type="text/javascript" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://uploads-ssl.webflow.com/5c3b8fd6652ba0656e653b96/js/webflow.f81c8ae54.js" type="text/javascript"></script>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.2/js/ion.rangeSlider.min.js"></script>

    </Fragment>
    );
  }
}

export default App;
