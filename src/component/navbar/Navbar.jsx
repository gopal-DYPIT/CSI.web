import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/CSI.png";
import "./Navbar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Facebook } from "@mui/icons-material";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state variable

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav className={navbar ? "navbar navbar-expand-lg navbar-dark NActive" : "navbar navbar-expand-lg navbar-dark"}>
      <NavLink className="navbar-brand" to="/" onClick={() => {scrollToTop(); closeMenu();}}>
        <img className="logo_csi" src={logo} alt="CSI Logo" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu} // Toggle menu open/close
        aria-controls="navbarNav"
        aria-expanded={isMenuOpen} // Update the expanded state
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/" activeClassName="active" onClick={() => {scrollToTop(); closeMenu();}}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/event" activeClassName="active" onClick={() => {scrollToTop(); closeMenu();}}>
              Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/member" activeClassName="active" onClick={() => {scrollToTop(); closeMenu();}}>
              Members
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blog" activeClassName="active" onClick={() => {scrollToTop(); closeMenu();}}>
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" activeClassName="active" onClick={() => {scrollToTop(); closeMenu();}}>
              About
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav d-flex flex-row r-0">
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/csidit/">
              <InstagramIcon />
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/computer-society-of-india-dit/mycompany/">
              <LinkedInIcon />
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/csiditofficial/?ref=br_rs">
              <Facebook />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
