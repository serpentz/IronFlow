import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as BR } from "react-router-dom";
import {Provider as P } from 'react-redux'
import store from './redux/store'
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <P store={store}>
    <BR>
      <App />
    </BR>
  </P>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
