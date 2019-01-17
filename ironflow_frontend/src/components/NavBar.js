import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import logo from "../images/logo.png";
import "../css/NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar scrolled">
        <div className="beta-waitlist-popup-container">
          <div className="beta-waitlist-popup">
            <div className="waitlist-close-button">
              <img
                src="https://global-uploads.webflow.com/59deb588800ae30001ec19c9/59dff983ad94200001413ae7_close-x.svg"
                alt=""
                className="image-2"
              />
            </div>
            <div className="html-embed-4 w-embed" />
          </div>
        </div>
        <div id="home-link" className="navbar-link logo">
          <div className="navbar-logo w-embed">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-link navbar-spacer" />
        <a
          href="https://about.beautiful.ai/#how-it-works"
          className="navbar-link underline hider"
        >
          how it works
        </a>
        <a
          href="https://about.beautiful.ai/templates"
          className="navbar-link underline hider"
        >
          templates
        </a>
        <a
          href="https://about.beautiful.ai/pricing"
          className="navbar-link underline hider"
        >
          Pricing
        </a>
        <a
          href="https://about.beautiful.ai/about"
          className="navbar-link underline hider"
        >
          About
        </a>
        <a
          href="https://blog.beautiful.ai"
          className="navbar-link underline hider"
        >
          Blog
        </a>
        <a
          id="navbar-signup"
          href="https://www.beautiful.ai/signup"
          className="navbar-link navbar-link-signup signup-button"
        >
          sign up
        </a>
        <a
          id="go-to-library"
          href="https://www.beautiful.ai/login"
          className="navbar-link navbar-link-go-to-library"
        >
          go to your Library
        </a>
        <a href="#" id="navbar-logout" className="navbar-link logout-button">
          LOG OUT
        </a>
        <a
          href="https://www.beautiful.ai/login"
          id="navbar-login"
          className="navbar-link underline"
        >
          Log In
        </a>
      </div>
    );
  }
}

export default NavBar;
