import React, { Component, Fragment } from "react";

import { Route, Switch, Link } from "react-router-dom";
import { submitAnswer } from "../redux/actions/questions";
import { connect } from "react-redux";

class Comments extends Component {
  state = {
    answer: ""
  };

  handleChange = ele => {
    this.setState({ answer: ele.target.value }, () =>
      console.log(this.state.answer)
    );
  };

  handleSubmit = e => {
    this.props.submitAnswer({
      statement: this.state.answer,
      question_id: this.props.selected.id
    });
  };
  render() {
    return (
      <Fragment>
        <div className="card card-comments mb-3 wow fadeIn">
          <div className="card-header font-weight-bold">
            {this.props.comments.length} comments
          </div>
          <div className="card-body">
            {this.props.comments.map(ans => {
              return (
                <div className="media d-block d-md-flex mt-4">
                  <img
                    className="mb-3"
                    style={{ height: "10vh", "border-radius": "10px" }}
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg"
                    alt="Generic placeholder image"
                  />
                  <div className="media-body text-center text-md-left ml-md-3 ml-0">
                    <h5 className="mt-0 font-weight-bold">{ans.user.name}</h5>
                    {ans.statement}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card mb-3 wow fadeIn">
          <div className="card-header font-weight-bold" />
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label for="replyFormComment">Know the answer?</label>
                <textarea
                  className="form-control"
                  onChange={this.handleChange}
                  id="replyFormComment"
                  rows="5"
                />
              </div>

              <div className="text-center mt-4">
                {this.props.loggedIn ? (
                  <button
                    onClick={this.handleSubmit}
                    className="btn btn-info btn-md"
                    type="button"
                  >
                    Post
                  </button>
                ) : (
                  <button
                    data-toggle="modal"
                    data-target="#darkModalForm"
                    className="btn btn-info btn-md"
                    type="button"
                  >
                    Post
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn,
    selected: state.questions.selected
  };
};

export default connect(
  mapStateToProps,
  { submitAnswer }
)(Comments);
