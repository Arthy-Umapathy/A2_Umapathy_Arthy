import React, { Component } from "react";
import NavigationBar from "../LandingPage/NavBar";
import Footer from "../Footer/Footer";
import View from "./ViewPost";
import { ListGroup } from "react-bootstrap";

export default class ViewPost extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div>
          <ListGroup variant="flush">
            <View />
            <View />
            <View />
          </ListGroup>
        </div>
        <Footer/>
      </div>
    );
  }
}
