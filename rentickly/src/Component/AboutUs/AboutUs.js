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
            date="2020 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Master's Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Nova Scotia,Canada
            </h4>
            <p>
              Pursuing Master's of Applied Computer Science in Dalhousie
              University
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Intern at Accenture
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tamil Nadu, India
            </h4>
            <p> Oracle, Java, Software Development</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Intern at Infosys
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Karnataka, India
            </h4>
            <p>Python, Java, Angular</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2015 - 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor's Degree
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tamil Nadu,India
            </h4>
            <p>BE Computer Science Engineering</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2013 - 2015"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">High School</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tamil Nadu,India
            </h4>
            <p>Computer Science Branch</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Fragment>
    </Fragment>
  );
}
export default AboutUs;
