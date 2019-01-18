import React, { Component } from "react";
import { PageOne, PageTwo, PageThree, PageFour, PageFive } from './pages' ;
import "../../App.css";

class RegistrationCarousel extends Component {
  state = {
    page: 1
  };

  changePage = num => {
    let { page } = this.state;
    let nextPage = (page += num);
    if (nextPage <= 3 && nextPage >= 1) {
      this.setState({ page: this.state.page + num });
    }
  };

  renderPage = () => {
    let { page } = this.state;
    switch (page) {
      case 1:
        return <PageOne />;
      case 2:
        return <PageTwo />;
      case 3:
        return <PageThree />;
      case 4:
        return <PageFour />;
      case 5:
        return <PageFive />;

      default:
    }
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    let { page } = this.state;
    return (

      <div className="collaborate-wrap">
    <div className="hero-collaborate">
        <div className="w-container">
            <h1 className="heading">Are you starting a new project?Let's collaborate!</h1>
            <div className="sub-heading">Please fill out this short form to get started, I'll get back to you shortly.</div>
        </div>
    </div>
    <div className="w-container">
        <div className="form-wrapper w-form">
            <form data-name="Email Form" id="email-form" name="email-form">
                <div className="step-paginator w-slider" data-animation="cross" data-disable-swipe="1" data-duration="200" data-hide-arrows="1">
                    <div className="mask w-slider-mask">
                        <div className="step w-slide">
                            <div className="collaborate-form-step">
                                <div className="form-content">
                                    <div className="form-section-title" data-ix="show-content-onslide" >Please fill in your details</div>
                                    <div className="form-title-line" data-ix="show-content-onslide" ></div>


                                </div>
                                <div className="step-counter" data-ix="show-content-onslide" >1/5</div>
                            </div>
                        </div>
                        <div className="step w-slide" >
                            <div className="collaborate-form-step">
                                <div className="form-content">
                                    <div className="form-section-title" data-ix="show-content-onslide" >About your Company</div>
                                    <div className="form-title-line" data-ix="show-content-onslide" ></div>
                                    <textarea className="area field w-input" data-ix="show-content-onslide" data-name="Brand/Company" id="Brand-Company" maxlength="5000" name="Brand-Company" placeholder="Tell me a bit about your start-up, company or organization." required="required" ></textarea>
                                </div>
                                <div className="step-counter" data-ix="show-content-onslide" >2/5</div>
                            </div>
                        </div>
                        <div className="step w-slide" >
                            <div className="collaborate-form-step">
                                <div className="form-content">
                                    <div className="form-section-title" data-ix="show-content-onslide" >How can I help you?</div>
                                    <div className="form-title-line" data-ix="show-content-onslide" ></div>
                                    <div className="form-row w-row" data-ix="show-content-onslide" >
                                        <div className="col w-col w-col-6 w-col-stack">
                                            <div className="checkbox-wrapper w-checkbox">

                                                <label className="checkbox-label w-form-label" for="UI-Design">UI Design</label>
                                                <div className="checkbox-active-overlay"></div>
                                            </div>
                                            <div className="checkbox-wrapper w-checkbox">

                                                <label className="checkbox-label w-form-label" for="Marketing-Site">Marketing Site</label>
                                                <div className="checkbox-active-overlay"></div>
                                            </div>
                                        </div>
                                        <div className="col w-col w-col-6 w-col-stack">
                                            <div className="checkbox-wrapper w-checkbox">

                                                <label className="checkbox-label w-form-label" for="UI-Development">UI Development</label>
                                                <div className="checkbox-active-overlay"></div>
                                            </div>
                                            <div className="checkbox-wrapper w-checkbox">

                                                <label className="checkbox-label w-form-label" for="General">Grab a beer</label>
                                                <div className="checkbox-active-overlay"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="step-counter" data-ix="show-content-onslide" >3/5</div>
                            </div>
                        </div>
                        <div className="step w-slide" >
                            <div className="collaborate-form-step">
                                <div className="form-content">
                                    <div className="form-section-title" data-ix="show-content-onslide" >Specify your time-frame</div>
                                    <div className="form-title-line" data-ix="show-content-onslide" ></div><span className="irs js-irs-1 irs-with-grid"><span className="irs"><span className="irs-line" tabindex="-1"><span className="irs-line-left"></span><span className="irs-line-mid"></span><span className="irs-line-right"></span></span><span className="irs-min" >0</span><span className="irs-max" >1</span><span className="irs-from" >0</span><span className="irs-to" >0</span><span className="irs-single" >± 1 month(s)</span></span><span className="irs-grid" ><span className="irs-grid-pol" ></span><span className="irs-grid-text js-grid-text-0" >0</span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol" ></span><span className="irs-grid-text js-grid-text-1" >4.5</span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol" ></span><span className="irs-grid-text js-grid-text-2" >9</span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol" ></span><span className="irs-grid-text js-grid-text-3" >13.5</span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol" ></span><span className="irs-grid-text js-grid-text-4" >18</span></span><span className="irs-bar" ></span><span className="irs-bar-edge"></span><span className="irs-shadow shadow-single" ></span><span className="irs-slider single" ></span></span>

                                    <div className="extra-option-wrap">
                                        <div className="checkbox-square checkbox-wrapper w-checkbox">

                                            <label className="checkbox-label no-label w-form-label" for="Long-term-partnership"></label>
                                            <div className="checkbox-active-overlay square-overlay"></div>
                                        </div>
                                        <div>I'm looking for a long-term partnership</div>
                                    </div>
                                </div>
                                <div className="step-counter" data-ix="show-content-onslide" >4/5</div>
                            </div>
                        </div>
                        <div className="step w-slide" >
                            <div className="collaborate-form-step">
                                <div className="final form-content">
                                    <div className="form-section-title" data-ix="show-content-onslide" >Specify your budget</div>
                                    <div className="form-title-line" data-ix="show-content-onslide" ></div><span className="irs js-irs-0 irs-with-grid"><span className="irs"><span className="irs-line" tabindex="-1"><span className="irs-line-left"></span><span className="irs-line-mid"></span><span className="irs-line-right"></span></span><span className="irs-min" >0</span><span className="irs-max" >1</span><span className="irs-from" >0</span><span className="irs-to" >0</span><span className="irs-single" >$2 500+</span></span><span className="irs-grid" ><span className="irs-grid-pol" ></span><span className="irs-grid-text js-grid-text-0" >2 000</span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol" ></span><span className="irs-grid-text js-grid-text-1" >7 750</span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol" ></span><span className="irs-grid-text js-grid-text-2" >13 500</span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol" ></span><span className="irs-grid-text js-grid-text-3" >19 250</span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol small" ></span><span className="irs-grid-pol" ></span><span className="irs-grid-text js-grid-text-4" >25 000</span></span><span className="irs-bar" ></span><span className="irs-bar-edge"></span><span className="irs-shadow shadow-single" ></span><span className="irs-slider single" ></span></span>


                                    <div className="extra-option-wrap">
                                        <div className="checkbox-square checkbox-wrapper w-checkbox">

                                            <label className="checkbox-label no-label w-form-label" for="Shared-Equity-Models"></label>
                                            <div className="checkbox-active-overlay square-overlay"></div>
                                        </div>
                                        <div>I'm interested in discussing stock compensation</div>
                                    </div>
                                </div>
                                <div className="step-counter" data-ix="show-content-onslide" >5/5</div>
                            </div>
                        </div>
                    </div>
                    <div className="previous w-slider-arrow-left" >
                        <div className="previous-button">← Back</div>
                    </div>
                    <div className="next w-slider-arrow-right" >
                        <div className="next-button">Next</div>
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
    <div className="social"><a className="social-link" href="https://twitter.com/sidneyottelohe" target="_blank">@sidneyottelohe</a></div>
</div>

      // <div
      //   className="form-wrapper w-form"
      //   {{ :  }}
      // >
      //   <form onSubmit={() => this.onSubmit()}>
      //     <div
      //       data-animation="cross"
      //       data-duration="200"
      //       data-disable-swipe="1"
      //       data-hide-arrows="1"
      //       className="step-paginator w-slider"
      //     >
      //       <div className="mask w-slider-mask">{this.renderPage()}</div>
      //       <div
      //         className="previous w-slider-arrow-left"
      //         {{ width:  }}
      //       >
      //         <div
      //           onClick={() => this.changePage(-1)}
      //           className="previous-button"
      //         >
      //           ← Back
      //         </div>
      //       </div>
      //       {page === 3 ? null : (
      //         <div className="next w-slider-arrow-right">
      //           <div onClick={() => this.changePage(1)} className="next-button">
      //             Next Page
      //           </div>
      //         </div>
      //       )}
      //     </div>
      //   </form>
      //   <div className="success-message w-form-done">
      //     <div>
      //       Thanks! I have received your form submission, I'll get back to you
      //       shortly!
      //     </div>
      //   </div>
      //   <div className="error-message w-form-fail">
      //     <div>Oops! Something went wrong while submitting the form</div>
      //   </div>
      // </div>
    );
  }
}

export default RegistrationCarousel;
