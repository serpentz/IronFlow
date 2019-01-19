import styles from '../Home.module.css'


import React, { Component,Fragment } from "react";
import {Link} from 'react-router-dom'
import cx from 'classnames';

export default class Home extends Component {
  render() {
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
    <p className={styles["paragraph-crypto-loader"]}>PLEASE&nbsp;WAIT</p>
    <div className={styles["loading-title-2"]}>IRON FLOW</div>
    <p className={styles["paragraph-crypto-loader"]}>BY ABSALOM CHERINET</p>
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
            <h1 className={cx(styles["h1"],styles["text-white"])}>
              Welcome to <strong> IronFlow</strong>
            </h1>
            <p className={styles["paragraph-aa"]}>
              A service provided by <strong>Students</strong> for{" "}
              <strong>Students</strong>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className={styles["container-crypto"]}>
      <div className={styles["div-block-11"]}>
        <section id="Hello-Crypto" className={styles["separator-cat-9"]}>
          <div className={styles["line-2"]}>
            <div className={cx(styles["line"], styles["line-horizontale-short"])} />
          </div>

          <div className={styles["line-2"]}>
            <div className={cx(styles["line"], styles["line-horizontale-short"])} />
          </div>
        </section>
        <div
          data-duration-in="300"
          data-duration-out="100"
          className={cx(styles["tabs-2"],styles["w-tabs"])}
        >
          <div className={cx(styles["tab-menu"], styles["w-tab-menu"])}>
            <a
              data-w-tab="News"
              className={[
                styles["tab-link"],styles["w-inline-block-block"],styles["w-tab-link"],styles["w--current"]
              ]}
            >
              <div>Top</div>
            </a>
            <a className={cx(styles["tab-link"], styles["w-inline-block-block"], styles["w-tab-link"])}>
              <div className={styles["text-block-8"]}>Recent</div>
            </a>
            <a className={cx(styles["tab-link"], styles["w-inline-block-block"], styles["w-tab-link"])}>
              <div>Unanswered</div>
            </a>
            <a className={cx(styles["tab-link"], styles["w-inline-block-block"], styles["w-tab-link"])}>
              <div>Project Ideas</div>
            </a>
          </div>
          <div className={styles["w-tab-content"]}>
            <div
              data-w-tab="News"
              className={cx(styles["w-tab-pane"],styles["w--tab-active"])}
              style={{ opacity: 1, transition: "opacity 300ms ease 0s" }}
            >
              <div className={cx(styles["row-twitter"], styles["w-row"])}>
                <div className={cx(styles["basic-column"], styles["w-col"],styles["w-col-4"])}>
              
                  <div className={cx(styles["tag-wrapper"],styles["twitter-main-2"])}>
                    <h1 className={styles["heading-card"]}>Ruby</h1>
                    <div className={styles["card card3-content"]}>
                      <div className={styles["card card3-question "]}>
                        Lorem ipsum dolor sit amet, has autem habemus propriae
                        ne, graeco utamur oblique eu his. Et vim mediocrem
                        signiferumque, no delenit habemus forensibus qui. Munere
                        invenire at usu, ei pri eruditi pericula patrioque, ea
                        mei quod tale velit. Tacimates inciderint cum at,
                        perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo
                        sapientem mei, graeci possim an eum. Ad his stet atqui,
                        probo delectus no qui.
                      </div>
                      <div className={styles["card card3-question-bottom"]}>
                        <div>Solved By:</div>
                        <Link
                          to="/profile"
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                      <div className={styles["card card3-question-bottom"]}>
                        <div>Answered By:</div>
                        <Link
                          to="/profile"
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                  <div className={cx(styles["tag-wrapper"],styles["twitter-main-2"])}>
                    <h1 className={styles["info-card"]}>Node</h1>
                    <div className={styles["card card3-content"]}>
                      <div className={styles["card card3-question "]}>
                        Lorem ipsum dolor sit amet, has autem habemus propriae
                        ne, graeco utamur oblique eu his. Et vim mediocrem
                        signiferumque, no delenit habemus forensibus qui. Munere
                        invenire at usu, ei pri eruditi pericula patrioque, ea
                        mei quod tale velit. Tacimates inciderint cum at,
                        perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo
                        sapientem mei, graeci possim an eum. Ad his stet atqui,
                        probo delectus no qui.
                      </div>
                      <div className={styles["card card3-question-bottom"]}>
                        <div>Solved By:</div>
                        <Link
                          to="/profile"
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                      <div className={styles["card card3-question-bottom"]}>
                        <div>Answered By:</div>
                        <Link
                          to="/profile"
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                <div className={styles["basic-column w-col w-col-4"]}>
                  <div className={cx(styles["tag-wrapper"],styles["twitter-main-2"])}>
                    <h1 className={styles["info-card"]}>Java</h1>
                    <div className={styles["card card3-content"]}>
                      <div className={styles["card card3-question "]}>
                        Lorem ipsum dolor sit amet, has autem habemus propriae
                        ne, graeco utamur oblique eu his. Et vim mediocrem
                        signiferumque, no delenit habemus forensibus qui. Munere
                        invenire at usu, ei pri eruditi pericula patrioque, ea
                        mei quod tale velit. Tacimates inciderint cum at,
                        perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo
                        sapientem mei, graeci possim an eum. Ad his stet atqui,
                        probo delectus no qui.
                      </div>
                      <div className={styles["card card3-question-bottom"]}>
                        <div>Solved By:</div>
                        <Link
                          to="/profile"
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                      <div className={styles["card card3-question-bottom"]}>
                        <div>Answered By:</div>
                        <Link
                          to="/profile"
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                  <div className={cx(styles["tag-wrapper"],styles["twitter-main-2"])}>
                    <h1 className={styles["info-card"]}>SQL</h1>
                    <div className={styles["card card3-content"]}>
                      <div className={styles["card card3-question "]}>
                        Lorem ipsum dolor sit amet, has autem habemus propriae
                        ne, graeco utamur oblique eu his. Et vim mediocrem
                        signiferumque, no delenit habemus forensibus qui. Munere
                        invenire at usu, ei pri eruditi pericula patrioque, ea
                        mei quod tale velit. Tacimates inciderint cum at,
                        perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo
                        sapientem mei, graeci possim an eum. Ad his stet atqui,
                        probo delectus no qui.
                      </div>
                      <div className={styles["card card3-question-bottom"]}>
                        <div>Solved By:</div>
                        <Link
                          to="/profile"
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                      <div className={styles["card card3-question-bottom"]}>
                        <div>Answered By:</div>
                        <Link
                          to="/profile"
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                  <div className={cx(styles["tag-wrapper"],styles["twitter-main-2"])}>
                    <h1 className={styles["info-card"]}>Web design</h1>
                    <div className={styles["card card3-content"]}>
                      <div className={styles["card card3-question "]}>
                        Lorem ipsum dolor sit amet, has autem habemus propriae
                        ne, graeco utamur oblique eu his. Et vim mediocrem
                        signiferumque, no delenit habemus forensibus qui. Munere
                        invenire at usu, ei pri eruditi pericula patrioque, ea
                        mei quod tale velit. Tacimates inciderint cum at,
                        perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo
                        sapientem mei, graeci possim an eum. Ad his stet atqui,
                        probo delectus no qui.
                      </div>
                      <div className={styles["card card3-question-bottom"]}>
                        <div>Solved By:</div>
                        <Link
                          to="/profile"
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                      <div className={styles["card card3-question-bottom"]}>
                        <div>Answered By:</div>
                        <Link
                          to="/profile"
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                <div className={styles["basic-column w-col w-col-4"]}>
                  <div className={cx(styles["tag-wrapper"],styles["twitter-main-2"])}>
                    <h1 className={styles["info-card"]}>Question</h1>
                    <div className={styles["card card3-content"]}>
                      <div className={styles["card card3-question "]}>
                        Lorem ipsum dolor sit amet, has autem habemus propriae
                        ne, graeco utamur oblique eu his. Et vim mediocrem
                        signiferumque, no delenit habemus forensibus qui. Munere
                        invenire at usu, ei pri eruditi pericula patrioque, ea
                        mei quod tale velit. Tacimates inciderint cum at,
                        perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo
                        sapientem mei, graeci possim an eum. Ad his stet atqui,
                        probo delectus no qui.
                      </div>
                      <div className={styles["card card3-question-bottom"]}>
                        <div>Solved By:</div>
                        <Link
                          to="/profile"
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                      <div className={styles["card card3-question-bottom"]}>
                        <div>Answered By:</div>
                        <Link
                          to="/profile"
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                  <div className={cx(styles["tag-wrapper"],styles["twitter-main-2"])}>
                    <h1 className={styles["info-card"]}>Question</h1>
                    <div className={styles["card card3-content"]}>
                      <div className={styles["card card3-question "]}>
                        Lorem ipsum dolor sit amet, has autem habemus propriae
                        ne, graeco utamur oblique eu his. Et vim mediocrem
                        signiferumque, no delenit habemus forensibus qui. Munere
                        invenire at usu, ei pri eruditi pericula patrioque, ea
                        mei quod tale velit. Tacimates inciderint cum at,
                        perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo
                        sapientem mei, graeci possim an eum. Ad his stet atqui,
                        probo delectus no qui.
                      </div>
                      <div className={styles["card card3-question-bottom"]}>
                        <div>Solved By:</div>
                        <Link
                          to="/profile"
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                      <div className={styles["card card3-question-bottom"]}>
                        <div>Answered By:</div>
                        <Link
                          to="/profile"
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                  <div className={cx(styles["tag-wrapper"],styles["twitter-main-2"])}>
                    <h1 className={styles["info-card"]}>ii blockchain</h1>
                    <div className={styles["card card3-content"]}>
                      <div className={styles["card card3-question "]}>
                        Lorem ipsum dolor sit amet, has autem habemus propriae
                        ne, graeco utamur oblique eu his. Et vim mediocrem
                        signiferumque, no delenit habemus forensibus qui. Munere
                        invenire at usu, ei pri eruditi pericula patrioque, ea
                        mei quod tale velit. Tacimates inciderint cum at,
                        perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo
                        sapientem mei, graeci possim an eum. Ad his stet atqui,
                        probo delectus no qui.
                      </div>
                      <div className={styles["card card3-question-bottom"]}>
                        <div>Solved By:</div>
                        <Link
                          to="/profile"
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                      <div className={styles["card card3-question-bottom"]}>
                        <div>Answered By:</div>
                        <Link
                          to="/profile"
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
                          className={
                            styles["link-navbar contenido redes w-inline-block"]
                          }
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
              </div>
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
