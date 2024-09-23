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
  return (
    <div className="footer-section">
      <div className="container">
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link to="/">
                    <img src={logo} className="img-fluid" alt="logo" />
                  </Link>
                </div>
                <div className="footer-text">
                  <p>
                    CSI is a student council of Department of Computer
                    Engineering at Pad. Dr. D.Y. Patil Institute of Engineering
                    and Technology, Pimpri. Formed in the year 2012, the club
                    has always been "For the students and By the students"
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="https://www.instagram.com/csidit/">
                    <Instagram className="icon-bg" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/computer-society-of-india-dit/mycompany/"
                  >
                    <LinkedIn className="icon-bg" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/csiditofficial/?ref=br_rs"
                  >
                    <Facebook className="icon-bg" />
                  </a>
                  <a target="_blank" href="/">
                    <Email className="icon-bg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/event">Events</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/member">Members</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="/">
                    <input type="email" name="Email" placeholder="Email Address" />
                    <button>
                      <Telegram className="icon-bg" />
                    </button>
                  </form>
                  <span>Thanks You For Subscribing!</span>
                </div>
                <div className="created-website">
                  <p>
                    Created By{" "}
                    <a href="https://www.linkedin.com/in/burhanuddin49/">
                      Burhanuddin Marcha &
                    </a>
                    <br />
                    <a href="https://www.linkedin.com/in/aniketghavte/">
                      {" "}
                      Aniket Ghavte
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="text-center text-lg">
            <div className="copyright-text">
              <p>Copyright &copy; 2023, All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
