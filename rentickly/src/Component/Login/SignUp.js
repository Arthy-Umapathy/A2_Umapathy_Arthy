import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBLink,
  MDBIcon,
} from "mdbreact";
import NavBar from "../LandingPage/NavBar";
import Fade from "react-reveal/Fade";
import backgroundimg from "./img.jpg";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      email: "",
      confirmemail: "",
    };
  }

  getLoginData = (value, type) =>
    this.setState({
      [type]: value,
    });

  onFormSubmit = (e) => {
    e.preventDefault();
    const { userName, password, email, confirmemail } = this.state;
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    if (!validEmailRegex.test(email)) {
      alert("Type a valid email id");
    } else if (userName.length <= 1) {
      alert("Type a valid username");
    } else if (password.length <= 1) {
      alert("Type a valid password");
    } else if (email != confirmemail) {
      alert("Email id not same");
    } else {
      alert("Successfully logged in");
    }
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${backgroundimg})`,

          backgroundPosition: "center",
          backgroundRepeat: "no - repeat",
          backgroundSize: "cover",
        }}
      >
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
                        Sign Up
                      </h3>
                    </MDBRow>
                  </div>
                  <MDBCardBody>
                    <form onSubmit={this.onFormSubmit}>
                      <div className="grey-text">
                        <MDBInput
                          label="Your name"
                          icon="user"
                          group
                          type="text"
                          validate
                          getValue={(value) =>
                            this.getLoginData(value, "userName")
                          }
                        />
                        <MDBInput
                          label="Your email"
                          icon="envelope"
                          group
                          type="email"
                          validate
                          getValue={(value) =>
                            this.getLoginData(value, "email")
                          }
                        />
                        <MDBInput
                          label="Confirm your email"
                          icon="exclamation-triangle"
                          group
                          type="text"
                          validate
                          getValue={(value) =>
                            this.getLoginData(value, "confirmemail")
                          }
                        />
                        <MDBInput
                          label="Your password"
                          icon="lock"
                          group
                          type="password"
                          validate
                          containerClass="mb-0"
                          getValue={(value) =>
                            this.getLoginData(value, "password")
                          }
                        />

                        <div className="text-center">
                          Already Registered?
                          <MDBLink to="SignIn">Sign In</MDBLink>
                        </div>

                        <div className="text-center">
                          or Sign in with:
                          <a href="https://myaccount.google.com/">
                            <MDBBtn
                              type="button"
                              gradient="blue"
                              rounded="true"
                              className="mr-md-3 z-depth-1a"
                            >
                              <MDBIcon
                                fab
                                icon="google-plus-g"
                                className="white-text text-center "
                              />
                            </MDBBtn>
                          </a>
                        </div>

                        <div className="text-center">
                          <MDBBtn
                            type="button"
                            gradient="blue"
                            className="btn-block z-depth-1a white-text font-weight-bold"
                            onClick={this.onFormSubmit}
                          >
                            Register
                          </MDBBtn>
                        </div>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Fade>
      </div>
    );
  }
}

export default SignUp;
