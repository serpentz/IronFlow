import React, { Component, Fragment } from "react";

import { Route, Switch, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signUp, logIn, logout,selectProfile } from "../redux/actions/user";
import { onChangeStatement, createQuestion } from "../redux/actions/questions";
import logo from "../images/logo.png";
import AutoComplete from "./AutoComplete";

import "../css/NavBar.css";
import "../css/Modal.css";

class NavBar extends Component {
  state = {
    register: false,
    question: {
      statement: "",
      category: ""
    },
    user: {
      email: "",
      name: "",
      password: ""
    }
  };

  handleChange = e => {
    this.props.onChangeStatement(e.target.value);
  };
  handleUserChange = e => {
    this.setState({
      ...this.state,
      user: { ...this.state.user, [e.target.name]: e.target.value }
    });
  };

  handleCreateQuestionSubmit = e => {
    e.preventDefault();

    this.props.createQuestion(this.state.question);
  };

  toggleRegister = () => {
    this.setState({ register: !this.state.register });
  };
  componentDidMount() {}
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
              <img src={logo} alt="" style={{ padding: "5px" }} />
            </div>
          </div>
          <div className="navbar1-link navbar1-spacer" />

          <Link to="home" className="navbar1-link underline hider">
            Home
          </Link>

          <Link to="/feed" className="navbar1-link underline hider">
            Feed
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

          {!this.props.loggedIn ? (
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
            <Fragment >
              <div onClick={() => this.props.selectProfile(this.props.currentUser.id)}>
              <Link
                id="go-to-library"
                to="/profile"
                style={{
                  display: "flex",
                  height: "auto",
                  padding: "6px 20px",
                  "border-radius": "10px",
                  "background-color": "#23aae0",
                  "-webkit-transition": "all .2s ease",
                  transition: "all .2s ease",
                  color: "#fff"
                }}
                className="navbar1-link underline"
              >
                go to your Profile
              </Link>
              </div>
              <span
                onClick={this.props.logout}
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
              style={{ "background-color": "#fff !important" }}
            >
              <div
                className="text-white rgba-stylish-strong py-5 px-5"
                style={{ "background-color": "#fff" }}
              >
                <div className="modal-header text-center pb-4">
                  <h3
                    className="modal-title w-100 font-weight-bold"
                    id="myModalLabel"
                  >
                    <strong>SIGN</strong>{" "}
                    <a className="blue-text font-weight-bold">
                      <strong> {this.state.register ? "UP" : "IN"}</strong>
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
                  <div className="md-form mb-5">
                    {!this.state.register ? null : (
                      <input
                        type="text"
                        id="Form-email4"
                        name="name"
                        onChange={this.handleUserChange}
                        placeholder="Name"
                        className="form-control validate "
                      />
                    )}
                  </div>
                  <div className="md-form mb-3">
                    <input
                      type="text"
                      id="Form-email4"
                      name="email"
                      onChange={this.handleUserChange}
                      style={{ color: "white" }}
                      placeholder="Email"
                      className="form-control validate "
                    />
                  </div>

                  <div className="md-form pb-3">
                    <input
                      type="password"
                      name="password"
                      id="Form-pass5"
                      onChange={this.handleUserChange}
                      className="form-control validate "
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
                        onClick={
                          this.state.register
                            ? () => this.props.signUp(this.state.user)
                            : () => this.props.logIn(this.state.user)
                        }
                        className="btn btn-primary btn-block btn-rounded z-depth-1"
                        value={this.state.register ? "Sign Up" : "Sign in"}
                        style={{
                          "background-image":
                            "linear-gradient(to left bottom, #9CECFB 0%, #65C7F7 100%)",
                          "background-color": "black important"
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p className="font-small black-text d-flex justify-content-end">
                        {this.state.register
                          ? "Have an account?"
                          : "Don't have an account"}
                        <span
                          onClick={this.toggleRegister}
                          className="blue-text ml-1 font-weight-bold"
                        >
                          {this.state.register ? "Log in" : "Sign up"}
                        </span>
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
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="form-autocomplete"
                  >
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
                    onChange={this.handleChange}
                    className="md-textarea "
                    rows="4"
                  />
                  <label data-error="wrong" data-success="right" for="form8">
                    Your Question.
                  </label>
                </div>
              </div>

              {this.props.loggedIn ? (
                <div className="modal-footer d-flex justify-content-center">
                  <button
                    onClick={this.props.createQuestion}
                    className="btn btn-primary"
                  >
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

const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn,
    statement: state.draft.statement,
    currentUser: state.user.currentUser
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { signUp, logIn, logout, onChangeStatement, createQuestion, selectProfile }
  )(NavBar)
);
