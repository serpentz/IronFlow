import React, { Component } from "react";

import { Route, Switch, Link } from "react-router-dom";
import cx from 'classnames';
import styles from '../css/Comments.module.css'


class Comments extends Component {
  render() {
    return (
      <div  className={cx(styles["section01"],styles["grey-section"])}>
      <div  className={cx(styles["wrapper"],styles["w-container"])}>
      <div data-ix="fade-up-1"  className={cx(styles["accordion"],styles["js-accordion"])}>
      <div  className={cx(styles["accordion__item"],styles["js-accordion-item"],styles["active"])}>
      <div  className={cx(styles["accordion-header"],styles["js-accordion-header"])}>
      <img src="https://uploads-ssl.webflow.com/5b37d3935b093ef684ecd7c0/5b37e7ae476262769e7c15b4_help.svg" width="40"/>
      <h5  className={cx(styles["question-text"])}>How much are logo designs?</h5>
      </div>
      <div data-ix="hide-on-load"  className={cx(styles["accordion-body"],styles["js-accordion-body"])} style={{display: "block"}}>
      <div  className={cx(styles["accordion-body__contents"])}>Greetings, Exalted One. Allow me to introduce myself. I am Luke Skywalker, Jedi Knight and friend to Captain Solo. I know that you are powerful, mighty Jabba, and that your anger with Solo must be equally powerful. I seek an audience with Your Greatness to bargain for Solo's life. With your wisdom, I'm sure that we can work out an arrangement which will be mutually beneficial and enable us to avoid any unpleasant confrontation.</div>
      </div>
      </div>
      </div>
      </div>
      </div>

    );
  }
}

export default Comments;
