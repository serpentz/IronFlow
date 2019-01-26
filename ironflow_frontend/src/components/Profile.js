import React, { Component } from "react";
import styles from "../Profile.module.css";
import cx from "classnames"

import {connect} from 'react-redux'

class Profile extends Component {

  componentDidUpdate() {
        window.scrollTo(0, 0);
    }
  render() {

    if(this.props.currentProfile){
      let {image_url,name,questions,answers} = this.props.currentProfile
    }



    return (
      <div className={cx(styles["section"],styles["home"],styles["front"])} style={{padding: "5%"}}>

        <div className={cx(styles["w-layout-grid"],styles["grid-7"],styles["autores"])}>
          <div
            id="w-node-8731ce28ea02-cd5fc69e"
            data-w-id="43e00d80-2cf4-edd2-5ed3-8731ce28ea02"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              opacity: 1,
              "transform-style": "preserve-3d"
            }}
            className={cx(styles["grid-block"],styles["contenido"],styles["autores"],styles["w-clearfix"])}
          >
            <div
              style={{
                "background-image":
                  `url(${this.props.currentProfile ? this.props.currentProfile.image_url : "https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png"})`
              }}
              className={cx(styles["imagen-peque"],styles["autor"],styles["big"])}
            />
            <h2>{this.props.currentProfile ? this.props.currentProfile.name : "First Last"}</h2>
            <div className={cx(styles["author-title"],styles["ocupacion"])}>{this.props.currentProfile ? this.props.currentProfile.email : "EMAIL"}</div>
            <div className={cx(styles["div-block-37"])}>
              <a
                href="#"
                target="_blank"
                style={{ "background-color": "#395ba3" }}
                className={cx(styles["link-navbar"],styles["contenido"],styles["redes"],styles["w-inline-block"])}
              >
                <img
                  height="0"
                  src={this.props.currentProfile ? this.props.currentProfile.image_url : "https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png"}
                  alt=""
                  width="0"
                />
              </a>
              <div>JavaScript, HTML, CSS, BootStrap, Everyhting Frontend </div>
            </div>
            <div id="w-node-7c2254628425-cd5fc69e" className={cx(styles["w-richtext"])}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Adipiscing enim eu turpis egestas pretium aenean pharetra magna.
                Arcu dui vivamus arcu felis. Nisl nisi scelerisque eu ultrices
                vitae auctor. Senectus et netus et malesuada fames. Dignissim
                diam quis enim lobortis scelerisque fermentum dui faucibus.
                Risus nec feugiat in fermentum posuere urna nec tincidunt.
                Vehicula ipsum a arcu cursus vitae congue mauris rhoncus.
                Pellentesque diam volutpat commodo sed egestas egestas. Luctus
                venenatis lectus magna fringilla urna porttitor. Ultrices
                gravida dictum fusce ut placerat orci. Ipsum dolor sit amet
                consectetur adipiscing elit ut. Varius vel pharetra vel turpis
                nunc eget lorem dolor. Tellus integer feugiat scelerisque varius
                morbi enim. Neque egestas congue quisque egestas diam in.
                Facilisi morbi tempus iaculis urna. Quam vulputate dignissim
                suspendisse in est. Dolor purus non enim praesent elementum.
                Montes nascetur ridiculus mus mauris vitae ultricies leo
                integer. Nunc vel risus commodo viverra maecenas accumsan lacus
                vel. Aenean vel elit scelerisque mauris pellentesque. At
                imperdiet dui accumsan sit amet nulla facilisi morbi.
              </p>
            </div>
          </div>
          <div
            id="w-node-d98086ac605b-cd5fc69e"
            data-w-id="f2916151-ef31-605b-0487-d98086ac605b"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              "transform-style": "preserve-3d"
            }}
            className={cx(styles["grid-block"])}
          >
            <div className={cx(styles["block-header"])}>
              <h3>Answers</h3>
              <div className={cx(styles["header-divider"])} />
            </div>
            <div className={cx(styles["column"],styles["w-dyn-list"])}>
              <div className={cx(styles["w-dyn-items"])}>
              {!this.props.currentProfile ?
                (<div className={cx(styles["collection-item-perspective"],styles["w-dyn-item"])}>
                  <a
                    href="#"
                    className={cx(styles["news-link"],styles["lateral"],styles["w-inline-block"])}
                    style={{
                      "will-change": "transform",
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      "transform-style": "preserve-3d"
                    }}
                  >
                    <div className={cx(styles["div-news"])}>
                      <div className={cx(styles["div-content"])}>
                        <div className={cx(styles["tag"],styles["color"])}>Answer Category</div>
                        <p className={cx(styles["titulo"],styles["negro"])}>
                          Question
                        </p>
                      </div>
                      <div
                        style={{
                          "background-image":
                            "url(https://webgradients.com/public/webgradients_png/019%20Malibu%20Beach.png)"
                        }}
                        className={cx(styles["imagen-peque"])}
                      />
                    </div>
                  </a>
                </div> ) : this.props.currentProfile.answers.map((answer) => {
                     return (
                      <div className={cx(styles["collection-item-perspective"],styles["w-dyn-item"])}>
                       <a
                         href="#"
                         className={cx(styles["news-link"],styles["lateral"],styles["w-inline-block"])}
                         style={{
                           "will-change": "transform",
                           transform:
                             "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                           "transform-style": "preserve-3d"
                         }}
                       >
                         <div className={cx(styles["div-news"])}>
                           <div className={cx(styles["div-content"])}>
                             <div className={cx(styles["tag"],styles["color"])}>{answer.question.categories.map(e => e.title).join(", ")}</div>
                             <p className={cx(styles["titulo"],styles["negro"])}>
                               {answer.question.statement}
                             </p>
                           </div>
                           <div
                             style={{
                               "background-image":
                                 "url(https://webgradients.com/public/webgradients_png/019%20Malibu%20Beach.png)"
                             }}
                             className={cx(styles["imagen-peque"])}
                           />
                         </div>
                       </a>
                     </div>)

                })}

              </div>
            </div>
          </div>
          <div
            id="w-node-90978faf8d01-cd5fc69e"
            data-w-id="53233b76-917f-2054-e48d-90978faf8d01"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              opacity: 1,
              "transform-style": "preserve-3d"
            }}
            // className={cx(styles["grid-block"])}
          >
            <div className={cx(styles["block-header"])}>
              <h3>Questions</h3>
              <div className={cx(styles["header-divider"])} />
            </div>
            <div className={cx(styles["column"],styles["w-dyn-list"])}>
              <div className={cx(styles["collection-list-wrap"],styles["w-dyn-items"],styles["w-row"])}>
                {!this.props.currentProfile ?
                  (<div className={cx(styles["collection-item-perspective"],styles["w-dyn-item"],styles["w-col"],styles["w-col-4"])}>
                  <a
                    href="#"
                    data-w-id="c975e992-2f8b-6ba2-124b-21e0d25d8393"
                    className={cx(styles["news-link"],styles["vertical"],styles["peque"],styles["w-inline-block"])}
                    style={{
                      "will-change": "transform",
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(-0.0007deg) rotateY(0.0006deg) rotateZ(0deg) skew(0deg, 0deg)",
                      "transform-style": "preserve-3d"
                    }}
                  >
                    <div
                      style={{
                        "background-image":
                          "url(https://webgradients.com/public/webgradients_png/019%20Malibu%20Beach.png)"
                      }}
                      className={cx(styles["imagen-peque"])}
                    />
                    <div className={cx(styles["div-news-vertival"])}>
                      <div className={cx(styles["div-top"])}>

                        <div
                          style={{
                            "background-color": "rgba(201, 0, 53, 0.85)"
                          }}
                          className={cx(styles["categoria"])}>
                          Ruby
                        </div>
                      </div>
                      <p className={cx(styles["titulo"],styles["negro"])}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </a>
                </div>) : this.props.currentProfile.questions.map(question => {
                  return (
                    <div className={cx(styles["collection-item-perspective"],styles["w-dyn-item"],styles["w-col"],styles["w-col-4"])}>
                    <a
                      href="#"
                      data-w-id="c975e992-2f8b-6ba2-124b-21e0d25d8393"
                      className={cx(styles["news-link"],styles["vertical"],styles["peque"],styles["w-inline-block"])}
                      style={{
                        "will-change": "transform",
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(-0.0007deg) rotateY(0.0006deg) rotateZ(0deg) skew(0deg, 0deg)",
                        "transform-style": "preserve-3d"
                      }}
                    >
                      <div
                        style={{
                          "background-image":
                            "url(https://webgradients.com/public/webgradients_png/019%20Malibu%20Beach.png)"
                        }}
                        className={cx(styles["imagen-peque"])}
                      />
                      <div className={cx(styles["div-news-vertival"])}>
                        <div className={cx(styles["div-top"])}>
                          <div
                            style={{
                              "background-color": "rgba(201, 0, 53, 0.85)"
                            }}
                            className={cx(styles["categoria"])}>
                            {question.categories.map(e => e.title).join(", ")}
                          </div>
                        </div>
                        <p className={cx(styles["titulo"],styles["negro"])}>
                          {question.statement.substring(0,40)}
                        </p>
                      </div>
                    </a>
                  </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentProfile: state.user.currentProfile
  }
}

export default connect(mapStateToProps)(Profile)
