import React, { Component } from "react";
import "../../../App.css";

export default class PageOne extends Component {
  render() {
    return (
      <div className="step w-slide">
        <div className="collaborate-form-step">
          <div className="step-counter">1/3</div>
          <div className="form-content">
            <div className="form-section-title">
              Please fill in your details
            </div>
            <div className="form-title-line" />
            <input
              type="text"
              className="field w-input"
              autofocus="true"
              maxlength="256"
              placeholder="Name"
              required=""
            />
            <input
              type="text"
              className="field w-input"
              autofocus="true"
              maxlength="256"
              placeholder="Email"
              required=""
            />
            <input
              type="password"
              className="field w-input"
              autofocus="true"
              maxlength="256"
              placeholder="Password"
              required=""
            />
          </div>
        </div>
      </div>
    );
  }
}
