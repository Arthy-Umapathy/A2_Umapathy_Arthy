import React, { Fragment } from "react";
import NavBar from "../LandingPage/NavBar";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import img from "./about.jpg";

function AboutUs(props) {
  return (
    <Fragment>
      <NavBar />
      <Fragment>
        <header
          className="jumbotron  text-center"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundRepeat: "no - repeat",
            backgroundSize: "cover",
          }}
        ></header>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Arthy Umapathy"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Master's Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Nova Scotia,Canada
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              ligula in erat facilisis fermentum. Maecenas a ex elementum eros
              blandit faucibus.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Arthy Umapathy"
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Master's Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Nova Scotia,Canada
            </h4>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              ligula in erat facilisis fermentum. Maecenas a ex elementum eros
              blandit faucibus.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Master's Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Nova Scotia,Canada
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              ligula in erat facilisis fermentum. Maecenas a ex elementum eros
              blandit faucibus.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2015 - 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Master's Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Nova Scotia,Canada
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              ligula in erat facilisis fermentum. Maecenas a ex elementum eros
              blandit faucibus.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2013 - 2015"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Master's Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Nova Scotia,Canada
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              ligula in erat facilisis fermentum. Maecenas a ex elementum eros
              blandit faucibus.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Fragment>
    </Fragment>
  );
}
export default AboutUs;
