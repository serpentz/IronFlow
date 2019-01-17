import React, { Component } from "react";
import "../../../App.css";

export default class PageFive extends Component {
  render() {
    return (
      <div
        className="step w-slide"
       
      >
        <div className="collaborate-form-step">
          <div className="form-content final">
            <div
              data-ix="show-content-onslide"
              className="form-section-title"
              
            >
              Alternate Phone Number and mail ID
            </div>
            <div
              data-ix="show-content-onslide"
              className="form-title-line"
             
            />
            <input
              type="text"
              className="field w-input"
              maxlength="256"
              name="phone-number"
              data-name="phone number"
              data-ix="show-content-onslide"
              placeholder="Alternate mobile number (any one of the participant)"
              id="phone-number-2"
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
            <input
              type="email"
              className="field w-input"
              autofocus="true"
              maxlength="256"
              name="email"
              data-name="email"
              data-ix="show-content-onslide"
              placeholder="Alternate Mail ID (any one of the participant)"
              id="email"
              required=""
              
            />
            <div className="extra-option-wrap">
              <div className="checkbox-wrapper checkbox-square w-checkbox">
                <input
                  type="checkbox"
                  id="Shared-Equity-Models"
                  name="Shared-Equity-Models"
                  data-name="Shared Equity Models"
                  data-ix="checkbox-ticker"
                  className="checkbox-ticker w-checkbox-input"
                />
                <label
                  for="Shared-Equity-Models"
                  className="checkbox-label no-label w-form-label"
                />
                <div className="checkbox-active-overlay square-overlay" />
              </div>
              <div>
                I agree to the terms and conditions of Computer Association
                Events.
              </div>
            </div>
          </div>
          <div
            data-ix="show-content-onslide"
            className="step-counter"
            
          >
            5/5
          </div>
        </div>
      </div>
    );
  }
}
