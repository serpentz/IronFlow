
import React, { Component, Fragment } from "react";
import {Link} from 'react-router-dom'
import cx from 'classnames';
import styles from '../css/Main.module.css'
import Top from './Top'
import Popular from './Popular'
import Trending from './Trending'
import Hero from './Hero'

class Main extends Component {


  render() {
    return (
      <Fragment>
            <div className={cx(styles["body-8"])}>
            <Hero />
         <div className={cx(styles["section-9"])}>

      
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
