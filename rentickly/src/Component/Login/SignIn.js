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
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import img from "./img2.jpg"

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
    };
  }

  getLoginData = (value, type) =>
    this.setState({
      [type]: value,
    });

  onFormSubmit = (e) => {
    e.preventDefault();
    const { userName, password } = this.state;
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    if (!validEmailRegex.test(userName)) {
      alert("Type a valid email id");
    } else if (password.length <= 1) {
      alert("Type a valid password");
    } else {
      alert("Successfully logged in");
    }
  };
  render() {
    return (
      <div style={{
        backgroundImage: `url(${img})`,

        backgroundPosition: "center",
        backgroundRepeat: "no - repeat",
        backgroundSize: "cover",
      }}>
        <NavBar />
        <br />
        <Fade left>
          <MDBContainer >
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="6">
                <MDBCard >
                  <div className="header pt-3 blue-gradient">
                    <MDBRow className="d-flex justify-content-center">
                      <h3 className="white-text mb-3 pt-3 font-weight-bold">
                        Sign in
                      </h3>
                    </MDBRow>
                  </div>
                  <MDBCardBody>
                    <form onSubmit={this.onFormSubmit}>
                      <div className="grey-text">
                        <MDBInput
                          label="Type your email"
                          icon="envelope"
                          group
                          type="text"
                          validate
                          getValue={(value) =>
                            this.getLoginData(value, "userName")
                          }
                        />
                        <MDBInput
                          label="Type your password"
                          icon="lock"
                          group
                          type="password"
                          validate
                          getValue={(value) =>
                            this.getLoginData(value, "password")
                          }
                        />
                        <h5 className="font-small blue-text d-flex justify-content-end pb-3">
                          Forgot
                          <Link to="" className="blue-text ml-1">
                            Password?
                          </Link>
                        </h5>
                        <div className="text-center">
                          New User?<MDBLink to="SignUp">Sign Up</MDBLink>
                        </div>
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
          <br/>
        </Fade>
      </div>
    );
  }
}

export default SignIn;
