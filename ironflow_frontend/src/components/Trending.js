import React, { Component, Fragment } from "react";import { Route, Switch, Link } from "react-router-dom";
import cx from 'classnames';
import styles from '../css/Main.module.css'
class Trending extends Component {
  render() {
    return (
      <Fragment>
      <div className={cx(styles["section-13"])}>
         <div className={cx(styles["div-block-52"])}>
            <div>
               <h1 className={cx(styles["heading-list"],styles["popular-airdrop"])}>Trending</h1>
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
                           <img width="90" height="75" alt="AIDUS" src="https://c1.staticflickr.com/4/3745/12226006674_1259a6bca7_b.jpg" sizes="75px"className={cx(styles["image-2"])} />
                           <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>NSA</h1>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>surveillance</div>
                                                 </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                     <Link to="/feed" className={cx(styles["link-block-10"],styles["w-inline-block"])}>
                        <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                           <img width="90" height="75" alt="AIDUS" src="https://cdn-images-1.medium.com/max/1200/1*R8Tw7k4Sla3sz7y3WoFc_Q.png" sizes="75px"className={cx(styles["image-2"])} />
                           <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>Angular</h1>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Front-end</div>                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                     <Link to="/feed" className={cx(styles["link-block-10"],styles["w-inline-block"])}>
                        <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                           <img width="90" height="75" alt="AIDUS" src="https://avatars.slack-edge.com/2015-12-15/16769299860_10d67877845c919e77d0_512.png" sizes="75px"className={cx(styles["image-2"])} />
                           <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>Dribbble</h1>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Design</div>                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                     <Link to="/feed" className={cx(styles["link-block-10"],styles["w-inline-block"])}>
                        <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                           <img width="90" height="75" alt="AIDUS" src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg" sizes="75px"className={cx(styles["image-2"])} />
                           <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>Adobe</h1>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Architecture</div>                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                     <Link to="/feed" className={cx(styles["link-block-10"],styles["w-inline-block"])}>
                        <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                           <img width="90" height="75" alt="AIDUS" src="http://www.gcppodcast.com/images/logo_large.png" sizes="75px"className={cx(styles["image-2"])} />
                           <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>GCP</h1>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label"])}>Cloud</div>                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                     <Link to="/feed" className={cx(styles["link-block-10"],styles["w-inline-block"])}>
                        <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                           <img width="90" height="75" alt="AIDUS" src="https://www.theeggbrussels.com/wp-content/uploads/2018/05/logo-AWS.png" sizes="75px"className={cx(styles["image-2"])} />
                           <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>AWS</h1>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Cloud</div>                        </div>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>      </Fragment>
    );
  }
}export default Trending;
