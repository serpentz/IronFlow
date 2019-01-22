import React, { Component, Fragment } from "react";

import { Chip, Avatar } from "@material-ui/core";

import { Link } from "react-router-dom";

export default class QuestionCard extends Component {
  render() {
    return (
      <Link className="my-5" to="/question">
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
              <strong> lorum ipsum alskdjo aysdl l;skd;u adk ? </strong>
            </p>

            <Chip style={chipStyle} label="Full-stack" />
            <Chip style={chipStyle} label="Ruby" />
            <Chip style={chipStyle} label="RoR" />
            <Chip style={chipStyle} label="React" />
            <p style={{ margin: "10px" }}>
              solved by{" "}
              <Link className="font-weight-bold" to="/profile">
                Jessica Clark
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
                  <p className="grey-text mb-md-0 mb-5"> 9 </p>
                  <h6
                    className="my-4"
                    style={{
                      color: "grey",
                      "font-size": "11px"
                    }}
                  >
                    Views
                  </h6>
                  <i className="far fa-eye fa-1x grey-text" />
                </div>
                <div className="col-md-6">
                  <p className="grey-text mb-md-0 mb-5"> 9 </p>
                  <h6
                    className="my-4"
                    style={{
                      color: "grey",
                      "font-size": "11px"
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
      </Link>
    );
  }
}

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
