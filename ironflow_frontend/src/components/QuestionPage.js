
import React, { Component, Fragment } from "react";
import {Link} from 'react-router-dom'
import cx from 'classnames';
import Comments from './Comments'
import styles from '../css/Main.module.css'
import commentStyles from '../css/Comments.module.css'

class QuestionPage extends Component {


  render() {
    return (

      <div className={cx(styles["body-4"])}style={{"padding-top":"6%"}}>
      <div className={cx(styles["section-2"])}>
          <div className={cx(styles["airdrop-full-details"])}>
              <div className={cx(styles["columns"],styles["w-row"])} >
                  <div className={cx(styles["column-6"],styles["w-col"],styles["w-col-3"],styles["w-col-stack"])}>
                      <div className={cx(styles["div-block-127"])}>
                          <div className={cx(styles["airdrop-sidebar"])}>
                              <img width="75" height="75" alt="Zorff Blockchain" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5be94ef0066356707f1acd49_zroff%20airdrp%20ico%20bounty.jpg" className={cx(styles["airdrop-logo"],styles["airdrop-image"])} /><img width="75" height="75" src="" alt="Zorff Blockchain" className={cx(styles["airdrop-logo"],styles["airdrop-image"],styles["w-dyn-bind-empty"])}/>
                              <h1 className={cx(styles["airdrop-name"],styles["information"])} >Zorff Blockchain</h1>
                              <div className={cx(styles["category"],styles["information"])} >Exchange</div>
                              <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["information"])} >Airdrop</div>
                              <a href="http://bit.ly/zorffblockchain" className={cx(styles["button"],styles["w-button"])} >Claim Airdrop</a><a href="http://bit.ly/zorffblockchain" className={cx(styles["button"],styles["w-condition-invisible"],styles["w-button"])}> Join The Contest</a><a href="http://bit.ly/zorffblockchain" className={cx(styles["button"],styles["w-condition-invisible"],styles["w-button"])}> Join Giveaway</a><a href="http://bit.ly/zorffblockchain" className={cx(styles["button"],styles["w-condition-invisible"],styles["w-button"])}> Join Refer &amp; Earn</a><a href="http://bit.ly/zorffblockchain" className={cx(styles["button"],styles["w-condition-invisible"],styles["w-button"])}> Get It Now</a><a href="#" className={cx(styles["button"],styles["add-to-favorite"],styles["w-hidden-medium"],styles["w-hidden-small"],styles["w-hidden-tiny"],styles["w-button"])}>Add to Favorite</a>
                              <a href="https://zorff.com/?utm_source=airdropnext" className={cx(styles["divlinks"],styles["divweblink"],styles["w-inline-block"])}>
                                  <div className={cx(styles["divlinks"],styles["airdrop-website"])} >
                                      <img src="https://global-uploads.webflow.com/5ba7e424b828fc638b530a9b/5bad66e6989edffb24fb4e95_earth-link.svg" width="18" height="22" alt="" className={cx(styles["image"],styles["testimg"])} />
                                      <div className={cx(styles["text-block-9"])}>Visit Official Website</div>
                                  </div>
                              </a>
                              <div className={cx(styles["divlinks"],styles["social"])} >
                                  <div className={cx(styles["social-icon"],styles["facebook"])} ><a href="#" className={cx(styles["w-inline-block"])}><img src="https://global-uploads.webflow.com/5ba7e424b828fc638b530a9b/5baea35313527bb67daca18c_facebook%20(1).svg" alt="" className={cx(styles["social-icon-image"])}/></a></div>
                                  <div className={cx(styles["social-icon"],styles["twitter"] )}><a href="https://twitter.com/zorffpay" className={cx(styles["w-inline-block"])}><img src="https://global-uploads.webflow.com/5ba7e424b828fc638b530a9b/5baea353302dd615710ee9e0_twitter%20(1).svg" alt="" className={cx(styles["social-icon-image"])}/></a></div>
                                  <div className={cx(styles["social-icon"],styles["telegram"])} ><a href="https://t.me/zorffpay" className={cx(styles["w-inline-block"])}><img src="https://global-uploads.webflow.com/5ba7e424b828fc638b530a9b/5bae01151f2da27189172af0_telegram-logo.svg" alt="" className={cx(styles["social-icon-image"])}/></a></div>
                                  <div className={cx(styles["social-icon"],styles["bitcointalk"] )}><a href="#" className={cx(styles["w-inline-block"])}><img src="https://global-uploads.webflow.com/5ba7e424b828fc638b530a9b/5bae011556ac543f444e094d_bitcoin.svg" alt="" className={cx(styles["social-icon-image"])}/></a></div>
                                  <div className={cx(styles["social-icon"],styles["other-links"])} ><a href="https://zorff.com/assets/zorff-white-paper.pdf" className={cx(styles["w-inline-block"])}><img src="https://global-uploads.webflow.com/5ba7e424b828fc638b530a9b/5bbe4e00f185f82cbfd19dae_whitepaper.svg" alt="" className={cx(styles["social-icon-image"])}/></a></div>
                              </div>
                              <div className={cx(styles["airdrop-details"],styles["w-hidden-medium"],styles["w-hidden-small"],styles["w-hidden-tiny"])}>
                                  <div className={cx(styles["div-airdrop-details"])}>
                                      <img src="https://global-uploads.webflow.com/5ba7e424b828fc638b530a9b/5bb7bc9d9c8636dfe404bfd0_coin%20(1).svg" width="16" alt="" className={cx(styles["image-10"])}/>
                                      <h6 className={cx(styles["airdrop-details-input"])}>ZRF</h6>
                                      <h6 className={cx(styles["airdrop-details-name"])}>Ticker:</h6>
                                  </div>
                                  <div className={cx(styles["div-airdrop-details"])}>
                                      <img src="https://global-uploads.webflow.com/5ba7e424b828fc638b530a9b/5bb7b9bf7768e707306d9900_database.svg" width="16" alt="" className={cx(styles["image-10"])}/>
                                      <h6 className={cx(styles["airdrop-details-name"])}>Platform:</h6>
                                      <h6 className={cx(styles["airdrop-details-input"])}>Ethereum</h6>
                                  </div>
                                  <div className={cx(styles["div-airdrop-details"])}>
                                      <img src="https://global-uploads.webflow.com/5ba7e424b828fc638b530a9b/5bb7b9c2696168ebefc039e0_worker-digging-a-hole.svg" width="16" alt="" className={cx(styles["image-10"])}/>
                                      <h6 className={cx(styles["airdrop-details-element"])}>Reward:</h6>
                                      <h6 className={cx(styles["airdrop-details-input"])}>10000 ZRF</h6>
                                  </div>
                                  <div className={cx(styles["div-airdrop-details"])}>
                                      <img src="https://global-uploads.webflow.com/5ba7e424b828fc638b530a9b/5bb7b9bfbc3a550e6ab594d7_money-bag.svg" width="16" alt="" className={cx(styles["image-10"])}/>
                                      <h6 className={cx(styles["airdrop-details-name"])}>Value:</h6>
                                      <h6 className={cx(styles["airdrop-details-input"])}>$5</h6>
                                  </div>
                                  <div className={cx(styles["div-airdrop-details"])}>
                                      <img src="https://global-uploads.webflow.com/5ba7e424b828fc638b530a9b/5bb7bc9efe03e5d3860d1242_time.svg" width="16" alt="" className={cx(styles["image-10"])}/>
                                      <h6 className={cx(styles["airdrop-details-name"])}>Ends:</h6>
                                      <div className={cx(styles["countdown"],styles["w-hidden-medium"],styles["w-hidden-small"],styles["w-hidden-tiny"],styles["w-embed"],styles["w-script"])}>
                                          <meta name="viewport" content="width=device-width, initial-scale=1"/>

                                          <p className={cx(styles["timer"])} id="Zorff Blockchain">00</p>
                                      </div>
                                      <h6 className={cx(styles["airdrop-details-input"] ,styles["_1"])} >Days Left</h6>
                                  </div>
                              </div>
                              <div className={cx(styles["airdrop-ratings"],styles["w-hidden-medium"],styles["w-hidden-small"],styles["w-hidden-tiny"])}>
                                  <h5>Project Ratings</h5>
                                  <div className={cx(styles["rating"],styles["expert-version"] )}>Expert Version</div>
                                  <div className={cx(styles["rating-number"],styles["rating"] )}>★★★★</div>
                                  <div className={cx(styles["rating"],styles["user-version"],styles["w-hidden-medium"],styles["w-hidden-small"],styles["w-hidden-tiny"])}>User Version</div>
                                  <div className={cx(styles["html-embed-14"],styles["w-embed"],styles["w-script"])}>
                                      <div className={cx(styles["rw-ui-container"])}data-title="Zorff Blockchain"></div>

                                  </div>
                              </div>
                              <div className={cx(styles["top-5-airdrop"],styles["w-hidden-medium"],styles["w-hidden-small"],styles["w-hidden-tiny"])}>
                                  <h4 className={cx(styles["heading-8"])}>Top Trending</h4>
                                  <div className={cx(styles["top-5-airdrop"],styles["w-dyn-list"])} >
                                      <div className={cx(styles["collection-list-3"],styles["w-dyn-items"] )}>
                                          <div className={cx(styles["w-dyn-item"])}>
                                              <a href="/airdrop/paxpago" className={cx(styles["link-block-15"],styles["w-inline-block"])} >
                                                  <img width="60" height="60" alt="Airdrop" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c42a9c09f5b8c326ce303dd_paxpago%20airdrop%20ico%20bounty.jpg" className={cx(styles["image-4"])}/>
                                                  <h5 className={cx(styles["heading-9"])}>PaxPago</h5>
                                                  <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["top-5"] )}>Airdrop</div>
                                                  <div className={cx(styles["text-block-17"])}>★★★★</div>
                                              </a>
                                          </div>
                                          <div className={cx(styles["w-dyn-item"])}>
                                              <a href="/airdrop/custom-contract" className={cx(styles["link-block-15"],styles["w-inline-block"])} >
                                                  <img width="60" height="60" alt="Airdrop" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c42090fb1bfb87827f301df_custom%20contract%20network%20airdrop%20ico%20bounty.jpg" className={cx(styles["image-4"])}/>
                                                  <h5 className={cx(styles["heading-9"])}>Custom Contract </h5>
                                                  <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["top-5"] )}>Airdrop</div>
                                                  <div className={cx(styles["text-block-17"])}>★★★★</div>
                                              </a>
                                          </div>
                                          <div className={cx(styles["w-dyn-item"])}>
                                              <a href="/airdrop/ubecoin" className={cx(styles["link-block-15"],styles["w-inline-block"])} >
                                                  <img width="60" height="60" alt="Airdrop" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c41f48852e6220efa660bb5_ubecoin%20airdrop%20ico%20bounty.jpg" className={cx(styles["image-4"])}/>
                                                  <h5 className={cx(styles["heading-9"])}>Ubecoin</h5>
                                                  <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["top-5"])} >Airdrop</div>
                                                  <div className={cx(styles["text-block-17"])}>★★★★</div>
                                              </a>
                                          </div>
                                          <div className={cx(styles["w-dyn-item"])}>
                                              <a href="/airdrop/pop-network" className={cx(styles["link-block-15"],styles["w-inline-block"])} >
                                                  <img width="60" height="60" alt="Airdrop" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c41f230d692921a67250f97_pop%20network%20airdrop%20ico%20bounty.jpg" className={cx(styles["image-4"])}/>
                                                  <h5 className={cx(styles["heading-9"])}>POP Network</h5>
                                                  <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["top-5"])} >Airdrop</div>
                                                  <div className={cx(styles["text-block-17"])}>★★★★</div>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={cx(styles["column-5"],styles["w-col"],styles["w-col-9"],styles["w-col-stack"])}>>
                      <div className={cx(styles["airdrop-information"])}>
                          <h1 className={cx(styles["introduction"],styles["description"])} >Description</h1>
                          <div className={cx(styles["airdrop-project-information"],styles["w-richtext"])} >
                              <p>Zorff features an integrated payment solution and an exchange platform poised as a decentralized market place which enables buyers and sellers to trade directly in any crypto and fiat currency using any method of payment. Zorff is a systematically fast and secure payment solution that enables smooth transfer of funds globally. Zorff facilitates merchants’ financial transactions using blockchain technology as an intermediary with minimized transaction costs.</p>
                          </div>
                          <div className={cx(styles["divonpagesocialshare"])}>
                              <div className={cx(styles["share-text"])}>Share</div>
                              <div className={cx(styles["socialsharecode"],styles["w-embed"],styles["w-script"])}>
                                  <div className={cx(styles["addthis_inline_share_toolbox"])}></div>

                              </div>
                          </div>
                          <h1 className={cx(styles["introduction"])}>How to participate?</h1>
                          <div className={cx(styles["how-to-join-airdrop"],styles["airdrop-project-information"],styles["w-richtext"])}>
                              <ol>
                                  <li>Fillup <a href="http://bit.ly/zorffblockchain" data-rt-link-type="external">Airdrop form</a>.</li>
                                  <li>Join their <a href="https://t.me/zorffglobal" data-rt-link-type="external">Telegram group</a>.</li>
                                  <li>Join<a href="https://t.me/zorffpay" data-rt-link-type="external"> telegram channel</a>.</li>
                                  <li>Follow on <a href="https://twitter.com/ZorffPay" data-rt-link-type="external">Twitter</a>.</li>
                                  <li>Retweet <a href="https://twitter.com/ZorffPay/status/1061342304320061440" data-rt-link-type="external">post</a> and tag 10 friends.</li>
                                  <li>We will be airdropping 10000 ZRF to participants and for every referral we give 1000 ZRF Token.</li>
                              </ol>
                          </div>
                          <div className={cx(styles["load-comment"],styles["w-hidden-main"],styles["w-hidden-medium"],styles["w-hidden-small"],styles["w-hidden-tiny"])}>
                              <div className={cx(styles["text-block-22"])}>Load Comment..</div>
                              <div className={cx(styles["text-block-22"])}>Hide Comment..</div>
                          </div>
                      </div>
                      <div className={cx(styles["airdrop-information"],styles["_1"])}>
                          <Comments />
                      </div>

                  </div>
              </div>

              <div className={cx(styles["div-block-22"],styles["w-hidden-main"])} >
                  <div className={cx(styles["airdrop-details"])}>
                      <div className={cx(styles["div-airdrop-details"])}>
                          <img src="https://global-uploads.webflow.com/5ba7e424b828fc638b530a9b/5bb7bc9d9c8636dfe404bfd0_coin%20(1).svg" width="16" alt="" className={cx(styles["image-10"])}/>
                          <h6 className={cx(styles["airdrop-details-input"])}>ZRF</h6>
                          <h6 className={cx(styles["airdrop-details-name"])}>Ticker:</h6>
                      </div>
                      <div className={cx(styles["div-airdrop-details"])}>
                          <img src="https://global-uploads.webflow.com/5ba7e424b828fc638b530a9b/5bb7b9bf7768e707306d9900_database.svg" width="16" alt="" className={cx(styles["image-10"])}/>
                          <h6 className={cx(styles["airdrop-details-name"])}>Platform:</h6>
                          <h6 className={cx(styles["airdrop-details-input"])}>Ethereum</h6>
                      </div>
                      <div className={cx(styles["div-airdrop-details"])}>
                          <img src="https://global-uploads.webflow.com/5ba7e424b828fc638b530a9b/5bb7b9c2696168ebefc039e0_worker-digging-a-hole.svg" width="16" alt="" className={cx(styles["image-10"])}/>
                          <h6 className={cx(styles["airdrop-details-element"])}>Reward:</h6>
                          <h6 className={cx(styles["airdrop-details-input"])}>10000 ZRF</h6>
                      </div>
                      <div className={cx(styles["div-airdrop-details"])}>
                          <img src="https://global-uploads.webflow.com/5ba7e424b828fc638b530a9b/5bb7b9bfbc3a550e6ab594d7_money-bag.svg" width="16" alt="" className={cx(styles["image-10"])}/>
                          <h6 className={cx(styles["airdrop-details-name"])}>Value:</h6>
                          <h6 className={cx(styles["airdrop-details-input"])}>$5</h6>
                      </div>
                      <div className={cx(styles["div-airdrop-details"],styles["w-hidden-medium"],styles["w-hidden-small"],styles["w-hidden-tiny"])}>
                          <img src="https://global-uploads.webflow.com/5ba7e424b828fc638b530a9b/5bb7bc9efe03e5d3860d1242_time.svg" width="16" alt="" className={cx(styles["image-10"])}/>
                          <h6 className={cx(styles["airdrop-details-name"])}>Ends:</h6>
                          <div className={cx(styles["countdown"],styles["w-hidden-medium"],styles["w-hidden-small"],styles["w-hidden-tiny"],styles["w-embed"],styles["w-script"])}>
                              <meta name="viewport" content="width=device-width, initial-scale=1"/>

                              <p className={cx(styles["timer"])}id="Zorff Blockchain">

                              </p>
                          </div>
                          <h6 className={cx(styles["airdrop-details-input"],styles["_1"])} >Days Left</h6>
                      </div>
                  </div>


              </div>
          </div>
      </div>

      <style id="service-icons-0"></style>
      <div className={cx(styles["section-26"])}>
          <div className={cx(styles["div-block-125"])}>
              <div>
                  <h1 className={cx(styles["heading-list"],styles["popular-airdrop"])} >Airdrop's that might interest you</h1>
              </div>
          </div>
      </div>
      <div className={cx(styles["section-3"])}>
          <div className={cx(styles["div-block-24"])}>
              <div className={cx(styles["w-dyn-list"])}>
                  <div className={cx(styles["trending-airdrop-list"],styles["w-dyn-items"],styles["w-row"])}>
                      <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                          <a href="/airdrop/cresio" className={cx(styles["link-block-14"],styles["w-inline-block"])} >
                              <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                                  <img width="75" height="75" alt="Airdrop" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c41f02a213386c9b7518a82_cresio%20airdrop%20ico%20bounty.jpg" className={cx(styles["image-2"])}/>
                                  <h3 className={cx(styles["airdrop-name"],styles["vertical"])} >Cresio</h3>
                                  <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}> Airdrop</div>
                                  <div className={cx(styles["category"],styles["vertical"])} >Blockchain</div>
                                  <div className={cx(styles["airdrop-value"],styles["vertical"])} >$5.8</div>
                                  <div className={cx(styles["airdrop-rating"],styles["vertical"])} >★★★★</div>
                              </div>
                          </a>
                      </div>
                      <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                          <a href="/airdrop/v-trust" className={cx(styles["link-block-14"],styles["w-inline-block"])} >
                              <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                                  <img width="75" height="75" alt="Airdrop" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c41557ee54faba74e5c96fa_vtrust%20airdrop%20ico%20bounty.jpg" className={cx(styles["image-2"])}/>
                                  <h3 className={cx(styles["airdrop-name"],styles["vertical"])} >V-Trust</h3>
                                  <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}> Airdrop</div>
                                  <div className={cx(styles["category"],styles["vertical"])} >Exchange</div>
                                  <div className={cx(styles["airdrop-value"],styles["vertical"])} >$26.3</div>
                                  <div className={cx(styles["airdrop-rating"],styles["vertical"])} >★★★★</div>
                              </div>
                          </a>
                      </div>
                      <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                          <a href="/airdrop/primexbt" className={cx(styles["link-block-14"],styles["w-inline-block"])} >
                              <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                                  <img width="75" height="75" alt="Airdrop" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c40454d8edfba6595b159b2_primexbt%20airdrop%20ico%20bounty.png" sizes="75px" srcset="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c40454d8edfba6595b159b2_primexbt%20airdrop%20ico%20bounty-p-500.png 500w, https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c40454d8edfba6595b159b2_primexbt%20airdrop%20ico%20bounty-p-800.png 800w, https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c40454d8edfba6595b159b2_primexbt%20airdrop%20ico%20bounty.png 960w" className={cx(styles["image-2"])}/>
                                  <h3 className={cx(styles["airdrop-name"],styles["vertical"])} >PrimeXBT</h3>
                                  <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}> Airdrop</div>
                                  <div className={cx(styles["category"],styles["vertical"])} >Exchange</div>
                                  <div className={cx(styles["airdrop-value"],styles["vertical"])} >$$</div>
                                  <div className={cx(styles["airdrop-rating"],styles["vertical"])} >★★★★</div>
                              </div>
                          </a>
                      </div>
                      <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                          <a href="/airdrop/coinimp" className={cx(styles["link-block-14"],styles["w-inline-block"])} >
                              <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                                  <img width="75" height="75" alt="Airdrop" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c4040d88edfba2f7eb1594c_coinimp%20airdrop%20ico%20bounty.png" className={cx(styles["image-2"])}/>
                                  <h3 className={cx(styles["airdrop-name"],styles["vertical"])} >CoinIMP</h3>
                                  <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}> Airdrop</div>
                                  <div className={cx(styles["category"],styles["vertical"])} >Blockchain</div>
                                  <div className={cx(styles["airdrop-value"],styles["vertical"])} >$5</div>
                                  <div className={cx(styles["airdrop-rating"],styles["vertical"])} >★★★★</div>
                              </div>
                          </a>
                      </div>
                      <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                          <a href="/airdrop/binance-jersey" className={cx(styles["link-block-14"],styles["w-inline-block"])} >
                              <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                                  <img width="75" height="75" alt="Airdrop" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c400c354ad04e078e9f898c_binance%20jersey%20airdrop%20ico%20bounty.png" className={cx(styles["image-2"])}/>
                                  <h3 className={cx(styles["airdrop-name"],styles["vertical"])} >Binance Jersey</h3>
                                  <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}> Airdrop</div>
                                  <div className={cx(styles["category"],styles["vertical"])} >Exchange</div>
                                  <div className={cx(styles["airdrop-value"],styles["vertical"])} >€20</div>
                                  <div className={cx(styles["airdrop-rating"],styles["vertical"])} >★★★★</div>
                              </div>
                          </a>
                      </div>
                      <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                          <a href="/airdrop/whirl" className={cx(styles["link-block-14"],styles["w-inline-block"])} >
                              <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                                  <img width="75" height="75" alt="Airdrop" src="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c3ffe4f60d9dc647e499e15_whril%20airdrop%20ico%20bounty.png" sizes="75px" srcset="https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c3ffe4f60d9dc647e499e15_whril%20airdrop%20ico%20bounty-p-500.png 500w, https://global-uploads.webflow.com/5ba8d21231e0097188d032e7/5c3ffe4f60d9dc647e499e15_whril%20airdrop%20ico%20bounty.png 561w" className={cx(styles["image-2"])}/>
                                  <h3 className={cx(styles["airdrop-name"],styles["vertical"])} >Whirl</h3>
                                  <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}> Airdrop</div>
                                  <div className={cx(styles["category"],styles["vertical"])} >Blockchain</div>
                                  <div className={cx(styles["airdrop-value"],styles["vertical"])} >$1M</div>
                                  <div className={cx(styles["airdrop-rating"],styles["vertical"])} >★★★★</div>
                              </div>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>



          );
        }
      }






export default QuestionPage
