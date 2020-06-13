import React, { Fragment } from "react";

class NavBars extends React.Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-md bg-primary navbar-dark fixed-top" style={{background:"linear-gradient(to left, #333399 0%, #0099cc 100%)"}}>
          <a href="/" className="navbar-brand">
            Rentickly
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
            aria-controls="collapsibleNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a className="nav-link" href="/AboutUs">
                  About Us
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/Help">
                  Help
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/FAQs">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <br />
      </Fragment>
    );
  }
}

export default NavBars;
