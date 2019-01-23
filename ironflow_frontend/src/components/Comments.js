import React, { Component, Fragment } from "react";

import { Route, Switch, Link } from "react-router-dom";
import { submitAnswer } from "../redux/actions/questions";
import { connect } from "react-redux";

class Comments extends Component {
  state = {
    answer: ""
  };

  handleChange = ele => {
    this.setState({ answer: ele.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitAnswer(this.state.answer);
  };
  render() {
    return (
      <Fragment>
        <div className="card card-comments mb-3 wow fadeIn">
          <div className="card-header font-weight-bold">{this.props.comments.length} comment</div>
          <div className="card-body">
            {
              this.props.comments.map(ans => {
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
                )
              })
            }
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
                <button className="btn btn-info btn-md" type="submit">
                  Post
                </button>
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
    loggedIn: state.user.loggedIn
  };
};

export default connect(
  mapStateToProps,
  { submitAnswer }
)(Comments);
