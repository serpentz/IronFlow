

import React, { Component, Fragment } from "react";

import { Route, Switch, Link } from "react-router-dom";
import cx from 'classnames';
import styles from '../css/Main.module.css'


class Popular extends Component {
  render() {
//     { label: 'WordPress' },
// { label: 'Security' },
// { label: 'Java' },
// { label: 'JavaScript' },
    return (
      <Fragment>


      <div className={cx(styles["section-13"])}>
         <div className={cx(styles["div-block-52"])}>
            <div>
               <h1 className={cx(styles["heading-list"],styles["popular-airdrop"])}>Popular Categories</h1>
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
                           <img width="90" height="75" alt="AIDUS" src="https://mruby.org/images/mruby_logo_red_icon.png" sizes="75px"className={cx(styles["image-2"])} />
                           <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>Embedded Ruby</h1>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Scripting</div>



                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                     <Link to="/feed" className={cx(styles["link-block-10"],styles["w-inline-block"])}>
                        <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                           <img width="90" height="75" alt="AIDUS" src="http://medianews.pogo.com/wp-content/uploads/2012/06/java-logo.jpg" sizes="75px"className={cx(styles["image-2"])} />
                           <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>Java</h1>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Programming</div>



                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                     <Link to="/feed" className={cx(styles["link-block-10"],styles["w-inline-block"])}>
                        <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                           <img width="90" height="75" alt="AIDUS" src="https://cdn.dribbble.com/users/5976/screenshots/2049228/lion_sun_glasses_shield_security_logo_design_by_alex_tass.jpg" sizes="75px"className={cx(styles["image-2"])} />
                           <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>Security</h1>
                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                     <Link to="/feed" className={cx(styles["link-block-10"],styles["w-inline-block"])}>
                        <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                           <img width="90" height="75" alt="AIDUS" src="https://image.freepik.com/free-icon/wordpress-logo_318-40291.jpg" sizes="75px"className={cx(styles["image-2"])} />
                           <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>WordPress</h1>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label-tablet"])}>Builder</div>



                        </div>
                     </Link>
                  </div>
                  <div className={cx(styles["collection-item"],styles["w-dyn-item"],styles["w-col"],styles["w-col-2"])}>
                     <Link to="/feed" className={cx(styles["link-block-10"],styles["w-inline-block"])}>
                        <div className={cx(styles["div-block-4"],styles["vertical"],styles["div-block"])}>
                           <img width="90" height="75" alt="AIDUS" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" sizes="75px"className={cx(styles["image-2"])} />
                           <h1 className={cx(styles["airdrop-name"],styles["vertical"])}style={{"font-size": "18px"}}>JavaScriptl</h1>
                           <div style={{"background-color":"#6a69e1"}} className={cx(styles["label"],styles["vertical-label"],styles["vertical-label"])}>Scripting</div>



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


    );
  }
}

export default Popular;
