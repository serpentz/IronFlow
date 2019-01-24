
import styles from '../Home.module.css'

import React, { Component,Fragment } from "react";


class Footer extends Component {


  render() {
    return (
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

    );
  }
}

export default Footer
