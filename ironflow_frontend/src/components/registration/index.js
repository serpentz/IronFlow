import RegistrationCarousel from "./RegistrationCarousel";

import React, { Component } from "react";
import "../../App.css";

export default class Registration extends Component {
  render() {
    return (
      <div className="collaborate-wrap">
        <div className="w-container">
          <RegistrationCarousel />
        </div>
      </div>
    );
  }
}
