import React, { Component } from "react";

export default class PageThree extends Component {
  render() {
    return (
      <div className="step w-slide">
        <div className="collaborate-form-step">
          <div className="form-content final">
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
              placeholder="List all Skills serperated by commas Ex. java, js, etc.."
              required=""
            />

            <input
              type="submit"
              value="Send Form"
              data-wait="Calculating Nash Equilibrium..."
              wait="Calculating Nash Equilibrium..."
              data-ix="show-content-onslide"
              className="submit-button w-button"
            />
          </div>

          <div data-ix="show-content-onslide" className="step-counter">
            3/3
          </div>
        </div>
      </div>
    );
  }
}
