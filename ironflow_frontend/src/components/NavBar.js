import React, { Component } from "react";

import { Route, Switch, Link } from "react-router-dom";
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

        <Link to="home" className="navbar-link underline hider">
          Feed
        </Link>
        <Link to="ask" className="navbar-link underline hider">
          Ask a Question
        </Link>
        <Link to="about" className="navbar-link underline hider">
          About
        </Link>
        <Link
          to="https://blog.beautiful.ai"
          className="navbar-link underline hider"
        >
          Blogs
        </Link>
        <Link
          id="navbar-signup"
          to="https://www.beautiful.ai/signup"
          className="navbar-link navbar-link-signup signup-button"
        >
          sign up
        </Link>
        <Link
          id="go-to-library"
          to="https://www.beautiful.ai/login"
          className="navbar-link navbar-link-go-to-library"
        >
          go to your profile
        </Link>
        <Link to="#" id="navbar-logout" className="navbar-link logout-button">
          LOG OUT
        </Link>
        <Link
          to="https://www.beautiful.ai/login"
          id="navbar-login"
          className="navbar-link underline"
        >
          Log In
        </Link>
      </div>
    );
  }
}

export default NavBar;
