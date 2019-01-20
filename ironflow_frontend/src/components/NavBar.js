import React, { Component } from "react";

import { Route, Switch, Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../css/NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar1 scrolled" >
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
        <div id="home-link" className="navbar1-link logo">
          <div className="navbar1-logo w-embed">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="navbar1-link navbar1-spacer" />

        <Link to="home" className="navbar1-link underline hider">
          Home
        </Link>
        <Link to="ask" className="navbar1-link underline hider">
          Ask a Question
        </Link>
        <Link to="about" className="navbar1-link underline hider">
          About
        </Link>
        <Link to="/blogs" className="navbar1-link underline hider">
          Blogs
        </Link>
        <Link
          id="navbar1-signup"
          to="/registration"
          className="navbar1-link signup-button"
        >
          sign up / log in
        </Link>
      </div>
    );
  }
}

export default NavBar;
