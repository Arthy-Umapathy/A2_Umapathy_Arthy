import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "react-app-polyfill/ie9";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import MediaQuery from "react-responsive";

ReactDOM.render(
  <Router>
    <script
      src="https://unpkg.com/react/umd/react.production.min.js"
      crossorigin
    ></script>

    <script
      src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
      crossorigin
    ></script>

    <script
      src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossorigin
    ></script>

    <script>var Alert = ReactBootstrap.Alert;</script>
    <div
      style={{
        backgroundColor: "whitesmoke",
      }}
    >
      <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
        <App />
      </MediaQuery>
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
