import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/CSI.png";
import "./Navbar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Facebook } from "@mui/icons-material";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={
        navbar
          ? "navbar navbar-expand-lg navbar-dark NActive"
          : "navbar navbar-expand-lg navbar-dark"
      }
    >
      <Link className="navbar-brand" href="/">
        <img className="logo_csi" src={logo} alt="" />
        <span className="logo-title"> COMPUTER SOCIETY OF INDIA</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex-lg-row justify-content-lg-around"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>

          {/* <li className="nav-item">
            <a
              className="nav-link"
              target="_blank"
              href="https://acunetix10.netlify.app/"
            >
              ACUNETIX 10.0
              <span className="sr-only">(current)</span>
              <span className="new-bounce">New</span>
            </a>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/event">
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/member">
              Members
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav d-flex flex-row r-0">
          <li className="nav-item me-3 me-lg-0">
            <a
              className="nav-link"
              target="_blank"
              href="https://www.instagram.com/csidit/"
            >
              <InstagramIcon />
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a
              className="nav-link"
              target="_blank"
              href="https://www.linkedin.com/company/computer-society-of-india-dit/mycompany/"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a
              className="nav-link"
              target="_blank"
              href="https://www.facebook.com/csiditofficial/?ref=br_rs"
            >
              <Facebook />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
