import React, { Component, Fragment } from "react";

import { Route, Switch, Link } from "react-router-dom";
import logo from "../images/logo.png";
import AutoComplete from './AutoComplete'

import "../css/NavBar.css";
import "../css/Modal.css";

class NavBar extends Component {
  state = {
    email: "",
    password: "",
    user: false
  };

  setCurrentUser = () => {
    this.setState({ user: !this.state.user });
  };
  componentDidMount(){

  }
  render() {
    return (
      <Fragment>
        <div className="navbar1 scrolled">
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
          <span
            className="navbar1-link underline hider"
            data-toggle="modal"
            data-target="#modalContactForm"
          >
            Ask a Question
          </span>
          <Link to="about" className="navbar1-link underline hider">
            About
          </Link>
          <Link to="/blogs" className="navbar1-link underline hider">
            Blogs
          </Link>
          {!this.state.user ? (
            <Fragment>

            <span
              id="navbar1-signup"
              data-toggle="modal"
              data-target="#darkModalForm"
              className="navbar1-link signup-button"
            >
              sign up / log in
            </span>
            </Fragment>
          ) : (
                <Fragment>
            <Link id="go-to-library" to="/profile" style={{display: "flex",
                height: "auto",
                padding: "6px 20px",
                "border-radius": "10px",
                "background-color":"#23aae0",
                "-webkit-transition": "all .2s ease",
                transition: "all .2s ease",
                color: "#fff"}}className="navbar-link navbar-link-go-to-library">go to your Profile</Link>
            <span
              onClick={this.setCurrentUser}
              className="navbar1-link signup-button"
            >
              log-out
            </span>
                </Fragment>
          )}
        </div>

        <div
          className="modal fade"
          id="darkModalForm"
          tabindex="-1"
          aria-labelledby="myModalLabel"
        >
          `
          <div className="modal-dialog form-dark" role="document">
            <div
              className="modal-content card"
              style={{ "background-color": "#fff" }}
            >
              <div className="text-white rgba-stylish-strong py-5 px-5 ">
                <div className="modal-header text-center pb-4">
                  <h3
                    className="modal-title w-100 white-text font-weight-bold"
                    id="myModalLabel"
                  >
                    <strong>SIGN</strong>{" "}
                    <a className="blue-text font-weight-bold">
                      <strong> UP</strong>
                    </a>
                  </h3>
                  <button
                    type="button"
                    className="close white-text"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className="modal-body">
                  <div className="md-form mb-3">
                    <input
                      type="email"
                      id="Form-email4"
                      className="form-control validate white-text"
                    />
                    <label
                      data-error="wrong"
                      data-success="right"
                      for="Form-email5"
                    >
                      Your email
                    </label>
                  </div>

                  <div className="md-form pb-3">
                    <input
                      type="password"
                      id="Form-pass5"
                      className="form-control validate white-text"
                      placeholder="password"
                    />
                    <label
                      data-error="wrong"
                      data-success="right"
                      for="Form-pass5"
                    />
                  </div>

                  <div className="row d-flex align-items-center mb-4">
                    <div className="text-center mb-3 col-md-12">
                      <input
                        type="button"
                        data-dismiss="modal"
                        onClick={this.setCurrentUser}
                        className="btn btn-primary btn-block btn-rounded z-depth-1"
                        value="Sign up"
                        style={{ "backgroud-color": "blue" }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p className="font-small white-text d-flex justify-content-end">
                        Have an account?{" "}
                        <a
                          href="#"
                          className="green-text ml-1 font-weight-bold"
                        >
                          Log in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Ask Modal*/}
        <div
          className="modal fade"
          id="modalContactForm"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">
                  Submit A Question
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-3">
                  <i className="fas fa-tag prefix grey-text"> </i>
                  <label data-error="wrong" data-success="right" for="form-autocomplete">
                    Category
                  </label>
                  <label data-error="wrong" data-success="right" for="form-autocomplete">
                    Category
                  </label>
                  <AutoComplete

                    type="text"
                    autocomplete="on"
                    id="form-autocomplete"
                    className="form-control validate"
                    placeholder="Subject"

                  />


                </div>

                <div className="md-form">
                  <i className="fas fa-pencil prefix grey-text" />
                  <textarea
                    type="text"
                    id="form8"
                    className="md-textarea "
                    rows="4"
                  />
                  <label data-error="wrong" data-success="right" for="form8">
                    Your Question.
                  </label>

                </div>
              </div>

              {this.state.user ? (
                <div className="modal-footer d-flex justify-content-center">
                  <button className="btn btn-unique">
                    Submit <i className="fas fa-paper-plane-o ml-1" />
                  </button>
                </div>
              ) : (
                <div
                  className="modal-footer d-flex justify-content-center"
                  data-toggle="modal"
                  data-target="#modalContactForm"
                >
                  <button
                    className="btn btn-unique"
                    data-toggle="modal"
                    data-target="#darkModalForm"
                  >
                    Please Login to Submit{" "}
                    <i className="fas fa-paper-plane-o ml-1" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NavBar;
