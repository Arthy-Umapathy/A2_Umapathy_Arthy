import React, { Component } from "react";
import Card from "./CardUI";
import img1 from "./Halifax.jpg";
import img2 from "./Toronto.png";
import img3 from "./vancouver.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card title="Halifax" imgsrc={img1} />
          </div>
          <div className="col-md-4">
            <Card title="Toronto" imgsrc={img2} />
          </div>
          <div className="col-md-4">
            <Card title="Vancouver" imgsrc={img3} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
