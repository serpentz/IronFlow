import React, { Component, Fragment } from "react";

import { Route, Switch, Link } from "react-router-dom";
import cx from 'classnames';
import styles from '../css/Main.module.css'


class Top extends Component {
  render() {
    return (
      <Fragment>
      <div className={cx(styles["section-15"])}>
         <div className={cx(styles["div-block-52"])}>
            <div>
               <h1 className={cx(styles["heading-list"],styles["featured-airdrop"])}>Top Featured</h1>
            </div>
         </div>
      </div>
      <div className={cx(styles["section-12"])}>
         <div className={cx(styles["div-block-2"])}>
            <div className={cx(styles["w-dyn-list"])}>
               <div className={cx(styles["featured-airdrop-list"],styles["w-dyn-items"],styles["w-row"])}>
                  <div className={cx(styles["collection-item-2"],styles["w-dyn-item"],styles["w-col"],styles["w-col-4"])}>
                     <Link to="feed" className={cx(styles["link-block-9"],styles["w-inline-block"])}>
                        <div data-w-id="9500215a-a292-d698-329e-beee844bc1e5" className={cx(styles["div-airdrop-list"])}>
                           <img width="80" height="80" alt="TRON" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/2000px-Ruby_logo.svg.png" className={cx(styles["airdrop-logo"])}/>
                           <h1 className={cx(styles["airdrop-name"])}>Ruby</h1>

                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"])}>Back-end</div>


                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item-2"],styles["w-dyn-item"],styles["w-col"],styles["w-col-4"])}>
                    <Link to="feed" className={cx(styles["link-block-9"],styles["w-inline-block"])}>
                        <div data-w-id="9500215a-a292-d698-329e-beee844bc1e5" className={cx(styles["div-airdrop-list"])}>
                           <img  width="80" height="80" alt="Coinsquare" src="https://hackr.io/assets/images/hacknlearn/react-logo.svg" className={cx(styles["airdrop-logo"])}/>
                           <h1 className={cx(styles["airdrop-name"])}>React.js</h1>

                           <div style={{"background-color":"blue"}} className={cx(styles["label"])}> Front-end</div>


                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item-2"],styles["w-dyn-item"],styles["w-col"],styles["w-col-4"])}>
                    <Link to="feed" className={cx(styles["link-block-9"],styles["w-inline-block"])}>
                        <div data-w-id="9500215a-a292-d698-329e-beee844bc1e5" className={cx(styles["div-airdrop-list"])}>
                           <img width="80" height="80" alt="KELTA" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7fU8g5NhqQzrJhHfdeN_GFDwZz9vpJi8D6uRWGyhCrxNo7fH" className={cx(styles["airdrop-logo"])}/>
                           <h1 className={cx(styles["airdrop-name"])}>Ruby on Rails</h1>

                           <div style={{"background-color":"blue"}} className={cx(styles["label"])}> Web Development </div>
                           <div className={cx(styles["airdrop-value"],styles["w-dyn-bind-empty"])}></div>

                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item-2"],styles["w-dyn-item"],styles["w-col"],styles["w-col-4"])}>
                     <Link to="feed" className={cx(styles["link-block-9"],styles["w-inline-block"])}>
                        <div data-w-id="9500215a-a292-d698-329e-beee844bc1e5" className={cx(styles["div-airdrop-list"])}>
                           <img width="80" height="80" alt="Coinsquare" src="https://cdn-images-1.medium.com/max/1200/0*U2DmhXYumRyXH6X1.png" className={cx(styles["airdrop-logo"])}/>
                           <h1 className={cx(styles["airdrop-name"])}>Redux</h1>

                           <div style={{"background-color":"blue"}} className={cx(styles["label"])}> Data </div>
                           <div className={cx(styles["airdrop-value"],styles["w-dyn-bind-empty"])}></div>

                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item-2"],styles["w-dyn-item"],styles["w-col"],styles["w-col-4"])}>
                     <Link to="feed" className={cx(styles["link-block-9"],styles["w-inline-block"])}>
                        <div data-w-id="9500215a-a292-d698-329e-beee844bc1e5" className={cx(styles["div-airdrop-list"])}>
                           <img width="80" height="80" alt="Wirex" src="https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-07-10/396072065317_f8b9a63ed67ca0368c6e_512.png" sizes="80px" className={cx(styles["airdrop-logo"])}/>
                           <h1 className={cx(styles["airdrop-name"])}> Heroku </h1>

                           <div style={{"background-color":"blue"}} className={cx(styles["label"])}> Deployment </div>
                           <div className={cx(styles["airdrop-value"],styles["w-dyn-bind-empty"])}></div>

                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item-2"],styles["w-dyn-item"],styles["w-col"],styles["w-col-4"])}>
                    <Link to="feed" className={cx(styles["link-block-9"],styles["w-inline-block"])}>
                        <div data-w-id="9500215a-a292-d698-329e-beee844bc1e5" className={cx(styles["div-airdrop-list"])}>
                           <img width="90" height="80" alt="Grupeer" src="https://cdn.freebiesupply.com/logos/large/2x/react-native-firebase-1-logo-png-transparent.png" className={cx(styles["airdrop-logo"])}/>
                           <h1 className={cx(styles["airdrop-name"])}>React Native</h1>

                           <div style={{"background-color":"blue"}} className={cx(styles["label"])}> Mobile </div>
                           <div className={cx(styles["airdrop-value"],styles["w-dyn-bind-empty"])}></div>

                        </div>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </Fragment>


    );
  }
}

export default Top;
