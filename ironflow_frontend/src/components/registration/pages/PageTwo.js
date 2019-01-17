import React, { Component } from "react";

export default class Page1 extends Component {
  render() {
    return (
      <div className="step w-slide">
        <div className="collaborate-form-step">
          <div className="form-content">
            <div data-ix="show-content-onslide" className="form-section-title">
              Skills
            </div>
            <div data-ix="show-content-onslide" className="form-title-line" />
            <textarea
              className="field area w-input"
              autofocus="true"
              maxlength="5000"
              name="class-and-division"
              data-name="class and division"
              data-ix="show-content-onslide"
              placeholder="List all Hobbies serperated by commas Ex. hiking, fishing, etc.."
              required=""
            />
          </div>
          <div data-ix="show-content-onslide" className="step-counter">
            2/3
          </div>
        </div>
      </div>
    );
  }
}
