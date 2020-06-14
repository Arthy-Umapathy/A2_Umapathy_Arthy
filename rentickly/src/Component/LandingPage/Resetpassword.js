import React, { Fragment } from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBLink,
} from "mdbreact";
import NavBar from "../LandingPage/NavBar";
import Fade from "react-reveal/Fade";

class Resetpassword extends React.Component {
  constructor() {
    super();
    this.state = {
      newpwd: "",
      confirmpwd: "",
    };
  }

  getLoginData = (value, type) =>
    this.setState({
      [type]: value,
    });

  onFormSubmit = (e) => {
    e.preventDefault();
    const { newpwd, confirmpwd } = this.state;
    if (newpwd < 5) {
      alert("Password should be of atleast 5 characters length");
    } else if (newpwd != confirmpwd) {
      alert("Passwords don't match");
    } else {
      alert("Reset password successful");
    }
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        <br />
        <Fade left>
          <MDBContainer>
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="6">
                <MDBCard>
                  <div className="header pt-3 blue-gradient">
                    <MDBRow className="d-flex justify-content-center">
                      <h3 className="white-text mb-3 pt-3 font-weight-bold">
                        Resetpassword
                      </h3>
                    </MDBRow>
                  </div>
                  <MDBCardBody>
                    <form onSubmit={this.onFormSubmit}>
                      <div className="grey-text">
                        <MDBInput
                          label="Type new password"
                          icon="envelope"
                          group
                          type="text"
                          validate
                          getValue={(value) =>
                            this.getLoginData(value, "newpwd")
                          }
                        />
                        <MDBInput
                          label="Confirm password"
                          icon="lock"
                          group
                          type="password"
                          validate
                          getValue={(value) =>
                            this.getLoginData(value, "confirmpwd")
                          }
                        />
                      </div>
                      <div className="text-center py-4 mt-3">
                        <MDBBtn
                          type="button"
                          gradient="blue"
                          className="btn-block z-depth-1a white-text font-weight-bold"
                          onClick={this.onFormSubmit}
                        >
                          Sign in
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <br />
        </Fade>
      </Fragment>
    );
  }
}

export default Resetpassword;
