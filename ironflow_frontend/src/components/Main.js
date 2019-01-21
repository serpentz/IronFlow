
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
         
      </div>
      </Fragment>
          );
        }
      }






export default Main
