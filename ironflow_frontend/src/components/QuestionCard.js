import React, { Component, Fragment } from "react";

import { Chip, Avatar } from "@material-ui/core";

import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { selectQuestion } from "../redux/actions/questions";

class QuestionCard extends Component {
  render() {
    let {
      statement,
      categories,
      view_count,
      answers,
      user: { id: user_id, name }
    } = this.props.question;

    return (
      <Link to="/question">
        <div
          onClick={() => {
            this.props.selectQuestion(this.props.question);
          }}
          className="my-5"
        >
          <div
            style={{
              height: "1px",
              width: "100%",
              background: "#eeeee0",
              shadow: "1px"
            }}
          >
            {" "}
          </div>

          <div className="row">
            <div className="col-lg-7 col-xl-9" style={{ margin: "auto" }}>
              <p
                className="dark-text"
                style={{
                  color: "#1981DF",
                  height: "4vh",
                  margin: "1vh",
                  "font-size": "18px"
                }}
              >
                {" "}
                <strong> {statement} </strong>
              </p>

              {categories.map(cat => (
                <Link to={`/feed/${cat.title}`}>
                  <Chip style={chipStyle} key={cat.id} label={cat.title} />
                </Link>
              ))}

              <p style={{ margin: "10px" }}>
                asked by{" "}
                <Link className="font-weight-bold" to={`/profile/${user_id}`}>
                  {name}
                </Link>
                , 16/04/2018
              </p>
            </div>
            <div className="col-lg-2">
              <section className="text-center my-5">
                <h2 className="h1-responsive font-weight-bold my-5" />

                <p className="lead grey-text w-responsive mx-auto mb-5" />

                <div className="row">
                  <div className="col-md-6">
                    <p className="grey-text mb-md-0 mb-5"> {view_count} </p>
                    <h6
                      className="my-4"
                      style={{
                        color: "grey",
                        "font-size": "8px"
                      }}
                    >
                      Views
                    </h6>
                    <i className="far fa-eye fa-1x grey-text" />
                  </div>
                  <div className="col-md-6">
                    <p className="grey-text mb-md-0 mb-5"> {answers.length} </p>
                    <h6
                      className="my-4"
                      style={{
                        color: "grey",
                        "font-size": "8px"
                      }}
                    >
                      Answers
                    </h6>
                    <i className="far fa-comment-alt fa-1x grey-text" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
const mapStateToProps = state => {
  return {
    selected: state.questions.selected
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { selectQuestion }
  )(QuestionCard)
);

const chipStyle = {
  height: "25px",
  "border-style": "solid",
  "border-width": "1px",
  "border-color": "white",
  "font-size": "15px",
  color: "white",
  "background-color": "#F77F00",
  marginRight: "5px"
};
