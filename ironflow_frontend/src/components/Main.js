
import React, { Component, Fragment } from "react";
import {Link} from 'react-router-dom'
import cx from 'classnames';
import styles from '../css/Main.module.css'
import Top from './Top'
import Popular from './Popular'
import Trending from './Trending'

class Main extends Component {


  render() {
    return (
      <Fragment>
            <div className={cx(styles["body-8"])}>
         <div className={cx(styles["section-9"])}style={{background: "blue",height: "10%"}}>
            <div className={cx(styles["div-block-42"])}>
               <div className={cx(styles["div-block-43"])} >

                </div>
            </div>
         </div>
         <Top />
         <Popular />
         <Trending />
         <div className={cx(styles["section-13"])}>
            <div className={cx(styles["div-block-52"])}>
               <div>
                  <h1 className={cx(styles["heading-list"],styles["favorite-airdrop"])}>Our Favorite Tech</h1>
               </div>

            </div>
         </div>
         <div className={cx(styles["section-11"])}>
            <div className={cx(styles["airdrop-list"],styles["_4"])}>
               <div className={cx(styles["w-dyn-list"])}>
                  <div className={cx(styles["trending-airdrop-list"],styles["w-dyn-items"],styles["w-row"])}>
                     <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                        <a href="/airdrop/whirl" className={cx(styles["link-block-12"],styles["w-inline-block"])}>
                           <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                              <img width="75" height="75" alt="Whirl" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c3ffe4f60d9dc647e499e15_whril%20airdrop%20ico%20bounty.png" sizes="75px" srcset="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c3ffe4f60d9dc647e499e15_whril%20airdrop%20ico%20bounty-p-500.png 500w, https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c3ffe4f60d9dc647e499e15_whril%20airdrop%20ico%20bounty.png 561w" className={cx(styles["image-2"])}/>
                              <h3 className={cx(styles["airdrop-name"],styles["vertical"])}>Whirl</h3>
                              <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Airdrop</div>
                              <div className={cx(styles["category"],styles["vertical"])}>Blockchain</div>
                              <div className={cx(styles["airdrop-value"],styles["vertical"])}>$1M</div>

                           </div>
                        </a>
                     </div>
                     <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                        <a href="/airdrop/tron" className={cx(styles["link-block-12"],styles["w-inline-block"])}>
                           <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                              <img width="75" height="75" alt="TRON" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c3ffbeb42565d8136188a9a_tron%20airdrop%20ico%20bounty.jpg" className={cx(styles["image-2"])}/>
                              <h3 className={cx(styles["airdrop-name"],styles["vertical"])}>TRON</h3>
                              <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Airdrop</div>
                              <div className={cx(styles["category"],styles["vertical"])}>Cryptocurrency</div>
                              <div className={cx(styles["airdrop-value"],styles["vertical"])}>$0.05</div>

                           </div>
                        </a>
                     </div>
                     <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                        <a href="/airdrop/afin-coin" className={cx(styles["link-block-12"],styles["w-inline-block"])}>
                           <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                              <img width="75" height="75" alt="Afin Coin" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c3ff32e8edfba586ab156e6_afin%20coin%20airdrop%20ico%20bounty.jpg" sizes="75px" srcset="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c3ff32e8edfba586ab156e6_afin%20coin%20airdrop%20ico%20bounty-p-500.jpeg 500w, https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c3ff32e8edfba586ab156e6_afin%20coin%20airdrop%20ico%20bounty-p-800.jpeg 800w, https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c3ff32e8edfba586ab156e6_afin%20coin%20airdrop%20ico%20bounty.jpg 960w" className={cx(styles["image-2"])}/>
                              <h3 className={cx(styles["airdrop-name"],styles["vertical"])}>Afin Coin</h3>
                              <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Airdrop</div>
                              <div className={cx(styles["category"],styles["vertical"])}>Cryptocurrency</div>
                              <div className={cx(styles["airdrop-value"],styles["vertical"])}>$4</div>

                           </div>
                        </a>
                     </div>
                     <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                        <a href="/airdrop/dataonblock-2" className={cx(styles["link-block-12"],styles["w-inline-block"])}>
                           <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                              <img width="75" height="75" alt="DataOnBlock 2°" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5bc5a734c8a0524d306a1826_dataonblock%20airdropnext.jpg" className={cx(styles["image-2"])}/>
                              <h3 className={cx(styles["airdrop-name"],styles["vertical"])}>DataOnBlock 2°</h3>
                              <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Airdrop</div>
                              <div className={cx(styles["category"],styles["vertical"])}>Exchange</div>
                              <div className={cx(styles["airdrop-value"],styles["vertical"])}>$1.7</div>

                           </div>
                        </a>
                     </div>
                     <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                        <a href="/airdrop/proof-of-toss-2" className={cx(styles["link-block-12"],styles["w-inline-block"])}>
                           <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                              <img width="75" height="75" alt="PROOF OF TOSS2°" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5befe038ab4d1a26e961d035_PROOF%20OF%20TOSS%20airdrop%20ico%20bounty.png" sizes="75px" srcset="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5befe038ab4d1a26e961d035_PROOF%20OF%20TOSS%20airdrop%20ico%20bounty-p-500.png 500w, https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5befe038ab4d1a26e961d035_PROOF%20OF%20TOSS%20airdrop%20ico%20bounty.png 566w" className={cx(styles["image-2"])}/>
                              <h3 className={cx(styles["airdrop-name"],styles["vertical"])}>PROOF OF TOSS2°</h3>
                              <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Airdrop</div>
                              <div className={cx(styles["category"],styles["vertical"])}>Blockchain</div>
                              <div className={cx(styles["airdrop-value"],styles["vertical"])}>$10</div>

                           </div>
                        </a>
                     </div>
                     <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                        <a href="/airdrop/crypto-potential" className={cx(styles["link-block-12"],styles["w-inline-block"])}>
                           <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                              <img width="75" height="75" alt="Crypto Potential" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c3cae9fca9f273595380ad6_crypto%20potential%20airdrop%20ico%20bounty.jpg" className={cx(styles["image-2"])}/>
                              <h3 className={cx(styles["airdrop-name"],styles["vertical"])}>Crypto Potential</h3>
                              <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Airdrop</div>
                              <div className={cx(styles["category"],styles["vertical"])}>Investment</div>
                              <div className={cx(styles["airdrop-value"],styles["vertical"])}>$10</div>

                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </Fragment>
          );
        }
      }






export default Main
