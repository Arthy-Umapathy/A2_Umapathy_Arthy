import React from "react";
import "./card-style.css";
import { Button } from "react-bootstrap";

const Card = (props) => {
  return (
    <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
      <div className="card text-center">
        <div className="overflow">
          <img src={props.imgsrc} alt="Image 1" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-secondary">Lorem ipsum</p>

          <a href="/viewPost">
            <Button>View Details</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
