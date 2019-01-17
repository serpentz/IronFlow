import React, { Component } from "react";
import { PageOne, PageTwo, PageThree, PageFour, PageFive } from "./pages";

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
      <div
        className="form-wrapper w-form"
        style={{ "align-content": "bottom" }}
      >
        <form onSubmit={() => this.onSubmit()}>
          <div
            data-animation="cross"
            data-duration="200"
            data-disable-swipe="1"
            data-hide-arrows="1"
            className="step-paginator w-slider"
          >
            <div className="mask w-slider-mask">{this.renderPage()}</div>
            <div
              className="previous w-slider-arrow-left"
              style={{ width: "auto" }}
            >
              <div
                onClick={() => this.changePage(-1)}
                className="previous-button"
              >
                ← Back
              </div>
            </div>
            {page === 3 ? null : (
              <div className="next w-slider-arrow-right">
                <div onClick={() => this.changePage(1)} className="next-button">
                  Next Page
                </div>
              </div>
            )}
          </div>
        </form>
        <div className="success-message w-form-done">
          <div>
            Thanks! I have received your form submission, I'll get back to you
            shortly!
          </div>
        </div>
        <div className="error-message w-form-fail">
          <div>Oops! Something went wrong while submitting the form</div>
        </div>
      </div>
    );
  }
}

export default RegistrationCarousel;
