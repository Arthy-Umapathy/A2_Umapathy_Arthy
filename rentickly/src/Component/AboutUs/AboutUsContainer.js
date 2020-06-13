import React from "react";

import AboutUsData from "./AboutUsData";
import AboutUs from "./AboutUs";

function AboutUsContainer() {
  const data = AboutUsData.map((data) => <AboutUs key={data.id} data={data} />);
  return <div className="timeline-container">{data}</div>;
}

export default AboutUsContainer;
