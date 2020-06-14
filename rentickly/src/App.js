import React, { Component } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AboutUs from "./Component/AboutUs/AboutUs";
import FAQs from "./Component/FAQs/FAQContainer";
import Help from "./Component/Contact/Help";
import LandingPage from "./Component/LandingPage/LandingPage";
import PageNotFound from "./Component/LandingPage/PageNotFound";
import SignUp from "./Component/Login/SignUp";
import SignIn from "./Component/Login/SignIn";
import Resetpassword from "./Component/LandingPage/Resetpassword";

class App extends Component {
  render() {
    return (
      <Router className="container">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Resetpassword" component={Resetpassword} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/Help" component={Help} />
          <Route exact path="/FAQs" component={FAQs} />
          <Route exact path="/404" component={PageNotFound} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/SignIn" component={SignIn} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
