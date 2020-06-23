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
<<<<<<< HEAD
import Review from "./Component/Review/review";
import Chat from "./Component/Chat/Chat";
=======
import Review from "./Component/Review/Review";
>>>>>>> 4dbcb89e2af3ec017c67d8eb2243e9bb5dce7a23

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
<<<<<<< HEAD
          <Route exact path="/Review" component={Review} />
          <Route exact path="/Chat" component={Chat} />
=======
          <Route exact path="/review" component={Review} />
>>>>>>> 4dbcb89e2af3ec017c67d8eb2243e9bb5dce7a23
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
