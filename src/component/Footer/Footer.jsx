import React from "react";
import "./Footer.css";
import logo from "../../assets/CSI.png";
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer-section">
      <div className="container">
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            {/* Logo and Description */}
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <Link to="/" onClick={scrollToTop}>
                  <img
                    src={logo}
                    className="footer-logo img-fluid mt-n1"
                    alt="logo"
                  />
                </Link>
                <p className="footer-text">
                  CSI is a student council of the Department of Computer
                  Engineering at Pad. Dr. D.Y. Patil Institute of Engineering
                  and Technology, Pimpri. Formed in 2012, the club has always
                  been "For the students and By the students".
                </p>
                <span>Follow us</span>
                <div className="footer-social-icon">
                  <a
                    href="https://www.instagram.com/csidit/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="icon-bg" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/computer-society-of-india-dit/mycompany/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn className="icon-bg" />
                  </a>
                  <a
                    href="https://www.facebook.com/csiditofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="icon-bg" />
                  </a>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <Email className="icon-bg" />
                  </a>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <h3 className="footer-widget-heading">Useful Links</h3>
                <ul>
                  {[
                    { name: "Home", path: "/" },
                    { name: "Events", path: "/event" },
                    { name: "Blogs", path: "/blog" },
                    { name: "Members", path: "/member" },
                    { name: "About Us", path: "/about" },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link to={item.path} onClick={scrollToTop}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subscription Form */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <h3 className="footer-widget-heading">Subscribe</h3>
                <p className="footer-text mb-25">
                  Don’t miss to subscribe to our new feeds; kindly fill the form
                  below.
                </p>
                <div className="subscribe-form">
                  <form action="/" method="POST">
                    <input
                      type="email"
                      name="Email"
                      placeholder="Email Address"
                      required
                    />
                    <button type="submit">
                      <Telegram className="icon-bg" />
                    </button>
                  </form>
                  <span>Thank You For Subscribing!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container text-center">
          <p className="copyright-text">
            Copyright &copy; 2024, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
