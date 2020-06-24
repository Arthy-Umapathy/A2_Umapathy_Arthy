import React, { Component } from "react";
// import "./NavigationBar.css";
// import NavigationBar from "./NavigationBar";
import SearchBar from "./SearchBar";
import Cards from "./Cards";
import Footer from "../Footer/Footer";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        {/* <NavigationBar /> */}

        <div class="Search">
          <SearchBar />
        </div>

        <div>
          <Cards />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
