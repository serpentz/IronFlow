import React, { Component } from "react";

export default class PageFour extends Component {
  render() {
    return (
      <div
        className="step w-slide"
        
      >
        <div className="collaborate-form-step">
          <div className="form-content">
            <div
              data-ix="show-content-onslide"
              className="form-section-title"
              
            >
              Specify your Team a name
            </div>
            <div
              data-ix="show-content-onslide"
              className="form-title-line"
              
            />
            <input
              type="text"
              className="field w-input"
              autofocus="true"
              maxlength="256"
              name="team-name"
              data-name="team name"
              data-ix="show-content-onslide"
              placeholder="Team Name"
              id="team-name"
              required=""
             
            />
          </div>
          <div
            data-ix="show-content-onslide"
            className="step-counter"
           
          >
            4/5
          </div>
        </div>
      </div>
    );
  }
}
