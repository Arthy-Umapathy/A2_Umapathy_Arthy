import React, { useState, Fragment } from "react";
import { Drawer, IconButton, Divider, Menu } from "@material-ui/core"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"
import "./Navbar.css"

function NavBars() {
  const [ open, setOpen ] = useState(false);
  console.log(open);
  const handleDrawer = () => {
      setOpen(true);  
  }
  const handleDrawerClose = () => {
      setOpen(false);
  }

  const useStyles = makeStyles({
      root: {
        background: "linear-gradient(to left, #333399 0%, #0099cc 100%)",
        width: "250px",
        position: "fixed"
    },
    IconColor: {
      color: "#FFFFFF"
    },
    dividerColor: {
        background: '#FFFFFF',
        marginLeft: "40px",
        marginRight: "40px",
        height: "1px"
    },
    backArrowClass: {
        marginLeft: "-45px"
    },

    headingStyle: {
        marginTop: "8px",
        marginLeft: "0.2%"
    },

    toolBarHeight: {
        height: "64px"
    }
  }
    );
  const classes = useStyles();
    return (
      <Fragment>
        <nav className="navbar navbar-expand-md bg-primary navbar-dark fixed-top" style={{background:"linear-gradient(to left, #333399 0%, #0099cc 100%)"}}>
          <IconButton classes={{ paper: classes.IconColor}}  onClick={handleDrawer} edge="start" aria-label="menu">
            <span className="navbar-toggler-icon"></span>
          </IconButton>
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
              <li className="nav-item ">
                <a className="nav-link" href="/postAd">
                  Post Ad
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/wishlist">
                  Favourites
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Drawer classes={{ paper: classes.root}} 
                    anchor="left"
                    open={open}
                    onClose={() => setOpen(false)} >
                    <div className="nav__header">
                        <IconButton classes={{root: classes.backArrowClass }} onClick={handleDrawerClose }  edge="start" aria-label="menu">
                            <ArrowBackIcon />
                        </IconButton>
                        <h4 className="nav__bar-title">Rentickly</h4>
                    </div>
                    <div className="nav__main">
                        <ul className="nav__main-items">
                            <li className="nav__main-item">
                                <a  href="/login">Login</a>
                            </li>
                            <li className="nav__main-item">
                                <a href="/register">Create Account</a>
                            </li>
                            <li className="nav__main-item">
                                <a  href="/postad">Post Ad</a>
                            </li>
                            <li className="nav__main-item">
                                <a href="/">Forums</a>
                            </li>
                            <li className="nav__main-item">
                                <a href="/">Book a transport</a>
                            </li>
                        </ul>
                    </div>
                    <Divider classes={{root: classes.dividerColor }} />
                    <div className="nav__main">
                        <ul className="nav__main-items">
                            <li className="nav__main-item">
                                <Link className="nav__bar-link" to="/aboutus">About Us</Link>
                            </li>
                            <li className="nav__main-item">
                                <Link className="nav__bar-link" to="/aboutus">About Us</Link>
                            </li>
                            <li className="nav__main-item">
                                <a href="/">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </Drawer>
        <br />
        <br />
      </Fragment>
    );
}

export default NavBars;
