import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import Comments from "./Comments";
import styles from "../css/Main.module.css";
import commentStyles from "../css/Comments.module.css";

class QuestionPage extends Component {
  render() {
    return (
      <div className={cx(styles["body-4"])} style={{ "padding-top": "6%" }}>
        <div className={cx(styles["section-2"])}>
          <div className={cx(styles["airdrop-full-details"])}>
            <div className={cx(styles["columns"], styles["w-row"])}>
              <div
                className={cx(
                  styles["column-6"],
                  styles["w-col"],
                  styles["w-col-3"],
                  styles["w-col-stack"]
                )}
              >
                <div className={cx(styles["div-block-127"])}>
                  <div className={cx(styles["airdrop-sidebar"])}>
                  <Link to="/profile">
                    <img
                      width="85"
                      height="85"
                      alt="USER"
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                      className={cx(
                        styles["airdrop-logo"],
                        styles["airdrop-image"]
                      )}
                    />
                    </Link>

                    <h1
                      className={cx(
                        styles["airdrop-name"],
                        styles["information"]
                      )}
                    >
                      FIRST LAST
                    </h1>
                    <div
                      className={cx(styles["category"], styles["information"])}
                    >
                      Full Stackc Dev
                    </div>

                    <Link to="/profile"
                      href="http://bit.ly/zorffblockchain"
                      className={cx(styles["button"], styles["w-button"])}
                    >
                      Visit Profile
                    </Link>






                    <div
                      className={cx(
                        styles["airdrop-ratings"],
                        styles["w-hidden-medium"],
                        styles["w-hidden-small"],
                        styles["w-hidden-tiny"]
                      )}
                    >

                      <div
                        className={cx(
                          styles["rating"],
                          styles["user-version"],
                          styles["w-hidden-medium"],
                          styles["w-hidden-small"],
                          styles["w-hidden-tiny"]
                        )}
                      >
                        Ask me about:
                      </div>
                      <div
                        className={cx(
                          styles["html-embed-14"],
                          styles["w-embed"],
                          styles["w-script"]
                        )}
                      >
                        <div
                          className={cx(styles["rw-ui-container"])}
                          data-title="Zorff Blockchain"
                        />
                      </div>
                    </div>
                    <div
                      className={cx(
                        styles["top-5-airdrop"],
                        styles["w-hidden-medium"],
                        styles["w-hidden-small"],
                        styles["w-hidden-tiny"]
                      )}
                    >
                      <h4 className={cx(styles["heading-8"])}>My Favorites </h4>
                      <div
                        className={cx(
                          styles["top-5-airdrop"],
                          styles["w-dyn-list"]
                        )}
                      >
                        <div
                          className={cx(
                            styles["collection-list-3"],
                            styles["w-dyn-items"]
                          )}
                        >
                          <div className={cx(styles["w-dyn-item"])}>
                            <a
                              href="/airdrop/paxpago"
                              className={cx(
                                styles["link-block-15"],
                                styles["w-inline-block"]
                              )}
                            >
                              <img
                                width="60"
                                height="60"
                                alt="Airdrop"
                                src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c42a9c09f5b8c326ce303dd_paxpago%20airdrop%20ico%20bounty.jpg"
                                className={cx(styles["image-4"])}
                              />
                              <h5 className={cx(styles["heading-9"])}>
                                Redux
                                <div
                                  style={{ "background-color": "rgb(247, 127, 0)","margin-left": "0px","padding-left":"3px" }}
                                  className={cx(styles["label"])}
                                >
                                  Data
                                </div>
                              </h5>


                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={cx(
                  styles["column-5"],
                  styles["w-col"],
                  styles["w-col-9"],
                  styles["w-col-stack"]
                )}

                >
                <div className={cx(styles["airdrop-information"])}>
                  <h1
                    className={cx(
                      styles["introduction"],
                      styles["description"]
                    )}
                  >
                    Description
                  </h1>
                  <div
                    className={cx(
                      styles["airdrop-project-information"],
                      styles["w-richtext"]
                    )}
                  >
                    <p>
                      Zorff features an integrated payment solution and an
                      exchange platform poised as a decentralized market place
                      which enables buyers and sellers to trade directly in any
                      crypto and fiat currency using any method of payment.
                      Zorff is a systematically fast and secure payment solution
                      that enables smooth transfer of funds globally. Zorff
                      facilitates merchants’ financial transactions using
                      blockchain technology as an intermediary with minimized
                      transaction costs.
                    </p>
                  </div>

                  <div
                    className={cx(
                      styles["load-comment"],
                      styles["w-hidden-main"],
                      styles["w-hidden-medium"],
                      styles["w-hidden-small"],
                      styles["w-hidden-tiny"]
                    )}
                  >
                    <div className={cx(styles["text-block-22"])}>
                      Load Comment..
                    </div>
                    <div className={cx(styles["text-block-22"])}>
                      Hide Comment..
                    </div>
                  </div>
                </div>
                <div
                  className={cx(styles["airdrop-information"], styles["_1"])}
                >
                  <Comments />
                </div>
              </div>
            </div>



          </div>
        </div>

        <style id="service-icons-0" />
        <div className={cx(styles["section-26"])}>
          <div className={cx(styles["div-block-125"])}>
            <div>
              <h1
                className={cx(
                  styles["heading-list"],
                  styles["popular-airdrop"]
                )}
              >
                Categories that might interest you
              </h1>
            </div>
          </div>
        </div>

        <Fragment>


        <div className={cx(styles["section-13"])}>
           <div className={cx(styles["div-block-52"])}>
              <div>
              
              </div>
           </div>
        </div>
        <div className={cx(styles["section-10"])}>
           <div className={cx(styles["airdrop-list"],styles["_2"])}>
              <div className={cx(styles["w-dyn-list"])}>
                 <div className={cx(styles["popular-category-airdrop"],styles["w-dyn-items"],styles["w-row"])}>
                    <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                       <Link to="/feed" className={cx(styles["link-block-10"],styles["w-inline-block"])}>
                          <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                             <img width="90" height="75" alt="AIDUS" src="https://whitelabelitsolutions.com/wp-content/uploads/2017/05/Cpanel_CP_logo_logotype.png" sizes="75px"className={cx(styles["image-2"])} />
                             <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>C-panel</h1>
                             <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Management</div>



                          </div>
                       </Link>
                    </div>
                    <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                       <Link to="/feed" className={cx(styles["link-block-10"],styles["w-inline-block"])}>
                          <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                             <img width="90" height="75" alt="AIDUS" src="https://whitelabelitsolutions.com/wp-content/uploads/2017/05/Cpanel_CP_logo_logotype.png" sizes="75px"className={cx(styles["image-2"])} />
                             <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>C-panel</h1>
                             <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Management</div>



                          </div>
                       </Link>
                    </div>
                    <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                       <Link to="/feed" className={cx(styles["link-block-10"],styles["w-inline-block"])}>
                          <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                             <img width="90" height="75" alt="AIDUS" src="https://whitelabelitsolutions.com/wp-content/uploads/2017/05/Cpanel_CP_logo_logotype.png" sizes="75px"className={cx(styles["image-2"])} />
                             <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>C-panel</h1>
                             <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Management</div>



                          </div>
                       </Link>
                    </div>
                    <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                       <Link to="/feed" className={cx(styles["link-block-10"],styles["w-inline-block"])}>
                          <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                             <img width="90" height="75" alt="AIDUS" src="https://whitelabelitsolutions.com/wp-content/uploads/2017/05/Cpanel_CP_logo_logotype.png" sizes="75px"className={cx(styles["image-2"])} />
                             <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>C-panel</h1>
                             <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Management</div>



                          </div>
                       </Link>
                    </div>
                    <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                       <Link to="/feed" className={cx(styles["link-block-10"],styles["w-inline-block"])}>
                          <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                             <img width="90" height="75" alt="AIDUS" src="https://whitelabelitsolutions.com/wp-content/uploads/2017/05/Cpanel_CP_logo_logotype.png" sizes="75px"className={cx(styles["image-2"])} />
                             <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>C-panel</h1>
                             <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label"])}>Management</div>



                          </div>
                       </Link>
                    </div>
                    <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                       <Link to="/feed" className={cx(styles["link-block-10"],styles["w-inline-block"])}>
                          <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                             <img width="90" height="75" alt="AIDUS" src="https://whitelabelitsolutions.com/wp-content/uploads/2017/05/Cpanel_CP_logo_logotype.png" sizes="75px"className={cx(styles["image-2"])} />
                             <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>C-panel</h1>
                             <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Management</div>



                          </div>
                       </Link>
                    </div>


                 </div>
              </div>
           </div>
        </div>

        </Fragment>
      </div>
    );
  }
}

export default QuestionPage;
