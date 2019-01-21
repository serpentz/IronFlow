

import React, { Component, Fragment } from "react";

import { Route, Switch, Link } from "react-router-dom";
import cx from 'classnames';
import styles from '../css/Main.module.css'


class Trending extends Component {
  render() {
    return (
      <Fragment>

      <div className={cx(styles["section-13"])}>
         <div className={cx(styles["div-block-52"])}>
            <div>
               <h1 className={cx(styles["heading-list"],styles["trending-airdrop"])}>See What's Trending</h1>
            </div>

         </div>
      </div>
      <div className={cx(styles["section-14"])}>
         <div className={cx(styles["airdrop-list"],styles["_3"])}>
            <div className={cx(styles["w-dyn-list"])}>
               <div className={cx(styles["trending-airdrop-list"],styles["w-dyn-items"],styles["w-row"])}>
                  <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                     <Link to="/feed" className={cx(styles["link-block-11"],styles["w-inline-block"])}>
                        <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                           <img width="75" height="75" alt="PaxPago" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c42a9c09f5b8c326ce303dd_paxpago%20airdrop%20ico%20bounty.jpg" className={cx(styles["image-2"])}/>
                           <h3 className={cx(styles["airdrop-name"],styles["vertical"])}>PaxPago</h3>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Airdrop</div>
                           <div className={cx(styles["category"],styles["vertical"])}>Payment</div>
                           <div className={cx(styles["airdrop-value"],styles["vertical"])}>$$</div>

                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                     <Link to="/feed" className={cx(styles["link-block-11"],styles["w-inline-block"])}>
                        <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                           <img width="75" height="75" alt="Custom Contract " src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c42090fb1bfb87827f301df_custom%20contract%20network%20airdrop%20ico%20bounty.jpg" className={cx(styles["image-2"])}/>
                           <h3 className={cx(styles["airdrop-name"],styles["vertical"])}>Custom Contract</h3>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Airdrop</div>
                           <div className={cx(styles["category"],styles["vertical"])}>Smart Contracts</div>
                           <div className={cx(styles["airdrop-value"],styles["vertical"])}>$$</div>

                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                     <Link to="/feed" className={cx(styles["link-block-11"],styles["w-inline-block"])}>
                        <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                           <img width="75" height="75" alt="Ubecoin" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c41f48852e6220efa660bb5_ubecoin%20airdrop%20ico%20bounty.jpg" className={cx(styles["image-2"])}/>
                           <h3 className={cx(styles["airdrop-name"],styles["vertical"])}>Ubecoin</h3>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Airdrop</div>
                           <div className={cx(styles["category"],styles["vertical"])}>Blockchain</div>
                           <div className={cx(styles["airdrop-value"],styles["vertical"])}>$25</div>

                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                     <Link to="/feed" className={cx(styles["link-block-11"],styles["w-inline-block"])}>
                        <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                           <img width="75" height="75" alt="POP Network" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c41f230d692921a67250f97_pop%20network%20airdrop%20ico%20bounty.jpg" className={cx(styles["image-2"])}/>
                           <h3 className={cx(styles["airdrop-name"],styles["vertical"])}>POP Network</h3>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Airdrop</div>
                           <div className={cx(styles["category"],styles["vertical"])}>Payment</div>
                           <div className={cx(styles["airdrop-value"],styles["vertical"])}>$10</div>

                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                     <Link to="/feed" className={cx(styles["link-block-11"],styles["w-inline-block"])}>
                        <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                           <img width="75" height="75" alt="Cresio" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c41f02a213386c9b7518a82_cresio%20airdrop%20ico%20bounty.jpg" className={cx(styles["image-2"])}/>
                           <h3 className={cx(styles["airdrop-name"],styles["vertical"])}>Cresio</h3>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Airdrop</div>
                           <div className={cx(styles["category"],styles["vertical"])}>Cryptocurrency</div>
                           <div className={cx(styles["airdrop-value"],styles["vertical"])}>$5.8</div>

                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                     <Link to="/feed" className={cx(styles["link-block-11"],styles["w-inline-block"])}>
                        <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                           <img width="75" height="75" alt="V-Trust" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c41557ee54faba74e5c96fa_vtrust%20airdrop%20ico%20bounty.jpg" className={cx(styles["image-2"])}/>
                           <h3 className={cx(styles["airdrop-name"],styles["vertical"])}>V-Trust</h3>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Airdrop</div>
                           <div className={cx(styles["category"],styles["vertical"])}>Exchange</div>
                           <div className={cx(styles["airdrop-value"],styles["vertical"])}>$26.3</div>

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

export default Trending;
