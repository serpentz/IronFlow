import React, { Component } from "react";

import styles from '../Home.module.css'
import profile from '../Profile.module.css'
import {Link} from 'react-router-dom'
import cx from 'classnames';

export default class QuestionCard extends Component {
  render() {

    return (
      <Link
        to="/question" >
      <div className={cx(styles["row-twitter"], styles["w-row"])}>
          <div className={cx(styles["tag-wrapper"],styles["twitter-main-2"])}>
            <h1 className={styles["info-card"]}>Ruby</h1>
            <div>
              <div>
                Lorem ipsum dolor sit amet, has autem habemus propriae
                ne, graeco utamur oblique eu his. Et vim mediocrem
                signiferumque, no delenit habemus forensibus qui. Munere
                invenire at usu, ei pri eruditi pericula patrioque, ea
                mei quod tale velit. Tacimates inciderint cum at,
                perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo
                sapientem mei, graeci possim an eum. Ad his stet atqui,
                probo delectus no qui.
              </div>
              <div className={cx(styles["card"],styles["card3-question-bottom"])}>
                <div>Solved By:</div>
                <Link
                  to="/profile"
                  className={cx(
                    profile["link-navbar"],  profile["contenido"],  profile["redes"],  profile["w-inline-block"]
                  )}
                  style={{ "background-color": "rgb(57, 91, 163)" }}
                >
                  <img
                    height="0"
                    src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png"
                    alt=""
                    width="0"
                    style={{
                      display: "none !important",
                      visibility: "hidden !important",
                      opacity: "0 !important",
                      "background-position": "0px 0px"
                    }}
                  />
                </Link>
              </div>
              <div className={cx(styles["card"],styles["card3-question-bottom"])}>
                <div>Answered By:</div>
                <Link
                  to="/profile"
                  className={cx(
                    profile["link-navbar"],  profile["contenido"],  profile["redes"],  profile["w-inline-block"]
                  )}
                  style={{ "background-color": "rgb(57, 91, 163)" }}
                >
                  <img
                    height="0"
                    src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png"
                    alt=""
                    width="0"
                    style={{
                      display: "none !important",
                      visibility: "hidden !important",
                      opacity: "0 !important",
                      "background-position": "0px 0px"
                    }}
                  />
                </Link>
                <Link
                  to="/profile"
                  className={cx(
                    profile["link-navbar"],  profile["contenido"],  profile["redes"],  profile["w-inline-block"]
                  )}
                  style={{ "background-color": "rgb(57, 91, 163)" }}
                >
                  <img
                    height="0"
                    src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png"
                    alt=""
                    width="0"
                    style={{
                      display: "none !important",
                      visibility: "hidden !important",
                      opacity: "0 !important",
                      "background-position": "0px 0px"
                    }}
                  />
                </Link>
                <Link
                  to="/profile"
                  className={cx(
                    profile["link-navbar"],  profile["contenido"],  profile["redes"],  profile["w-inline-block"]
                  )}
                  style={{ "background-color": "rgb(57, 91, 163)" }}
                >
                  <img
                    height="0"
                    src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png"
                    alt=""
                    width="0"
                    style={{
                      display: "none !important",
                      visibility: "hidden !important",
                      opacity: "0 !important",
                      "background-position": "0px 0px"
                    }}
                  />
                </Link>
                <Link
                  to="/profile"
                  className={cx(
                    profile["link-navbar"],  profile["contenido"],  profile["redes"],  profile["w-inline-block"]
                  )}
                  style={{ "background-color": "rgb(57, 91, 163)" }}
                >
                  <img
                    height="0"
                    src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png"
                    alt=""
                    width="0"
                    style={{
                      display: "none !important",
                      visibility: "hidden !important",
                      opacity: "0 !important",
                      "background-position": "0px 0px"
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
          </div>
          </Link>




    );
  }
}
