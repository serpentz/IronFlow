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
                           <img width="80" height="80" alt="TRON" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c3ffbeb42565d8136188a9a_tron%20airdrop%20ico%20bounty.jpg" className={cx(styles["airdrop-logo"])}/>
                           <h1 className={cx(styles["airdrop-name"])}>TRON</h1>
                           <div className={cx(styles["category"],styles["featured-list"])}>Cryptocurrency</div>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"])}>Airdrop</div>
                           <div className={cx(styles["airdrop-value"])}>$0.05</div>

                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item-2"],styles["w-dyn-item"],styles["w-col"],styles["w-col-4"])}>
                    <Link to="feed" className={cx(styles["link-block-9"],styles["w-inline-block"])}>
                        <div data-w-id="9500215a-a292-d698-329e-beee844bc1e5" className={cx(styles["div-airdrop-list"])}>
                           <img width="80" height="80" alt="Insights Network" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c372334440f21642fb9d27e_insight%20network%20airdrop%20ico%20bounty.jpg" className={cx(styles["airdrop-logo"])}/>
                           <h1 className={cx(styles["airdrop-name"])}>Insights"],styles["Network</h1>
                           <div className={cx(styles["category"],styles["featured-list"])}>Exchange</div>
                           <div style={{"background-color":"blue"}} className={cx(styles["label"])}> Ask a Question</div>
                           <div className={cx(styles["airdrop-value"])}>$0.18</div>

                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item-2"],styles["w-dyn-item"],styles["w-col"],styles["w-col-4"])}>
                    <Link to="feed" className={cx(styles["link-block-9"],styles["w-inline-block"])}>
                        <div data-w-id="9500215a-a292-d698-329e-beee844bc1e5" className={cx(styles["div-airdrop-list"])}>
                           <img width="80" height="80" alt="KELTA" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c332f0cff1c075afaa09387_kelta%20mining%20data%20center.001.jpeg" className={cx(styles["airdrop-logo"])}/>
                           <h1 className={cx(styles["airdrop-name"])}>KELTA</h1>
                           <div className={cx(styles["category"],styles["featured-list"])}>Mining</div>
                           <div style={{"background-color":"blue"}} className={cx(styles["label"])}> Ask a Question</div>
                           <div className={cx(styles["airdrop-value"],styles["w-dyn-bind-empty"])}></div>

                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item-2"],styles["w-dyn-item"],styles["w-col"],styles["w-col-4"])}>
                     <Link to="feed" className={cx(styles["link-block-9"],styles["w-inline-block"])}>
                        <div data-w-id="9500215a-a292-d698-329e-beee844bc1e5" className={cx(styles["div-airdrop-list"])}>
                           <img width="80" height="80" alt="Coinsquare" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c25d59375fcbd31fd6e49e9_coinsquare%20refer%20%26%20earn.png" className={cx(styles["airdrop-logo"])}/>
                           <h1 className={cx(styles["airdrop-name"])}>Coinsquare</h1>
                           <div className={cx(styles["category"],styles["featured-list"])}>Exchange</div>
                           <div style={{"background-color":"blue"}} className={cx(styles["label"])}> Ask a Question</div>
                           <div className={cx(styles["airdrop-value"],styles["w-dyn-bind-empty"])}></div>

                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item-2"],styles["w-dyn-item"],styles["w-col"],styles["w-col-4"])}>
                     <Link to="feed" className={cx(styles["link-block-9"],styles["w-inline-block"])}>
                        <div data-w-id="9500215a-a292-d698-329e-beee844bc1e5" className={cx(styles["div-airdrop-list"])}>
                           <img width="80" height="80" alt="Wirex" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c25d3d5b482f94fd269df68_wirex%20refer%20%26%20earn.png" sizes="80px" srcset="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c25d3d5b482f94fd269df68_wirex%20refer%20%26%20earn-p-500.png 500w, https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c25d3d5b482f94fd269df68_wirex%20refer%20%26%20earn.png 750w" className={cx(styles["airdrop-logo"])}/>
                           <h1 className={cx(styles["airdrop-name"])}>Wirex</h1>
                           <div className={cx(styles["category"],styles["featured-list"])}>Exchange</div>
                           <div style={{"background-color":"blue"}} className={cx(styles["label"])}> Ask a Question</div>
                           <div className={cx(styles["airdrop-value"],styles["w-dyn-bind-empty"])}></div>

                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item-2"],styles["w-dyn-item"],styles["w-col"],styles["w-col-4"])}>
                    <Link to="feed" className={cx(styles["link-block-9"],styles["w-inline-block"])}>
                        <div data-w-id="9500215a-a292-d698-329e-beee844bc1e5" className={cx(styles["div-airdrop-list"])}>
                           <img width="80" height="80" alt="Grupeer" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c25d06fb482f9226869df50_gurper%20refer%20%26%20earn.png" sizes="80px" srcset="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c25d06fb482f9226869df50_gurper%20refer%20%26%20earn-p-500.png 500w, https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c25d06fb482f9226869df50_gurper%20refer%20%26%20earn-p-800.png 800w, https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c25d06fb482f9226869df50_gurper%20refer%20%26%20earn.png 960w" className={cx(styles["airdrop-logo"])}/>
                           <h1 className={cx(styles["airdrop-name"])}>Grupeer</h1>
                           <div className={cx(styles["category"],styles["featured-list"])}>Exchange</div>
                           <div style={{"background-color":"blue"}} className={cx(styles["label"])}> Ask a Question</div>
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
