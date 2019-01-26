import styles from '../Home.module.css'
import profile from '../Profile.module.css'

import React, { Component,Fragment } from "react";
import {connect}from 'react-redux'
import QuestionCard from './QuestionCard'
import Hero from "./Hero"
import Footer from "./Footer"
import {Link,withRouter} from 'react-router-dom'
import cx from 'classnames';

class Home extends Component {



  getFilteredList = () => {
    let {category, questions} = this.props
    return category ? questions.filter((question) => {
      return question.categories.some((cat) => {return cat.title == category})
    }): questions
  }
  componentDidUpdate() {
        window.scrollTo(0, 0);
    }
  componentDidMount() {
        window.scrollTo(0, 0);
    }

  render() {
    return (
          <div>
            <div
              className={cx(styles["loader--2"],styles["loader-main-2"])}
              data-ix="page-loader"
              style={{ display: "none", transition: "opacity 200ms ease 0s", opacity: 0 }}
            >


            </div>
            <div className={styles["body-custom-crypto"]}>
              <div className={styles["hero-1-crypto"]}>
                <div className={styles["hero-crypto"]} />
                <div
                  data-poster-url="https://uploads-ssl.webflow.com/5b991c5d6c758280566b3b8a/5b9a67767d3b3e36ee530358_Head-or-Tails-poster-00001.jpg"
                  data-video-urls="https://uploads-ssl.webflow.com/5b991c5d6c758280566b3b8a/5b9a67767d3b3e36ee530358_Head-or-Tails-transcode.webm,https://uploads-ssl.webflow.com/5b991c5d6c758280566b3b8a/5b9a67767d3b3e36ee530358_Head-or-Tails-transcode.mp4"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  className={
                    cx(styles["background-video-home-crypto"],
                      styles["w-background-video"],
                      styles["w-background-video-atom"]
                    )
                  }
                />

                <div className={styles["section-hero-top-crypto"]}>
                  <div className={styles["div-s1-title-intro"]}>
                
                  </div>
                </div>
              </div>

              <div className={styles["container-crypto"]}>
                <div className={styles["div-block-11"]}>

                  <div
                    data-duration-in="300"
                    data-duration-out="100"
                    className={cx(styles["tabs-2"],styles["w-tabs"])}
                  >

                    <div className={styles["w-tab-content"]}>
                      <div
                        data-w-tab="News"
                        className={cx(styles["w-tab-pane"],styles["w--tab-active"])}
                        style={{ opacity: 1, transition: "opacity 300ms ease 0s" }}
                      >
                          {

                            this.getFilteredList().map((a)=> {

                               return <QuestionCard question={a}/>}
                             )
                          }

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


            </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      questions: state.questions.questions
  }
}
export default withRouter(connect(mapStateToProps)(Home));
