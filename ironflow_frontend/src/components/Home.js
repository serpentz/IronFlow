import styles from '../Home.module.css'
import profile from '../Profile.module.css'

import React, { Component,Fragment } from "react";
import QuestionCard from './QuestionCard'
import {Link} from 'react-router-dom'
import cx from 'classnames';

export default class Home extends Component {

  render() {
      let arr = [7,6,6,5,4,3,2,1]
    return (
      <div>
  <div
    className={cx(styles["loader--2"],styles["loader-main-2"])}
    data-ix="page-loader"
    style={{ display: "none", transition: "opacity 200ms ease 0s", opacity: 0 }}
  >
    <div className={styles["background-loader-2"]}>
      <img
        src="https://uploads-ssl.webflow.com/5b991c5d6c758280566b3b8a/5b9a6ab814101a4ae64f4206_Facebook-1s-200px.svg"
        height="0"
        alt=""
        className={styles["image-7"]}
        width="0"
      />
    </div>

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
          <div className={styles["div-block-4"]}>

          </div>
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
                {arr.map((a)=> <QuestionCard />)}

                </div>
              </div>
            </div>
          </div>
        </div>

    <section id="footer" className={styles["footer-3"]}>
      <div className={styles["footer-left"]}>
        <a
          href="https://twitter.com/GarethMoison"
          className={styles["social_link w-inline-block-block"]}
        >
          <img
            src="https://uploads-ssl.webflow.com/5b67621af109cf31dad8da5c/5b67621af109cf75d2d8da71_Twitter-black.svg"
            height="0"
            alt=""
            className={styles["umanist_twitter"]}
            width="0"
            style={{
              display: "none !important",
              visibility: "hidden !important",
              opacity: "0 !important",
              "background-position": "0px 15px"
            }}
          />
        </a>
      </div>
      <div className={styles["header-center"]} />
    </section>
  </div>
</div>




    );
  }
}
