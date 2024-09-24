import React from "react";
import "./EventCard.css";
import img1 from "../../assets/Acunetix11.jpg";
import img2 from "../../assets/CC.jpg";
import img3 from "../../assets/Acunetix10.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const EventCard = () => {
  return (
    <div className="event">
      <div className="event-header">
        <h1>Events</h1>
      </div>
      <div className="upcoming-event">
        <h1>Upcoming Events</h1>
        <h2 className="blinking-text">Coming Soon!</h2>
        <p>Stay with us for more updates on upcoming events.</p>
      </div>
      <div className="event-card-body">
        <h2>Previous Events held by us</h2>
        <p>For the students and By the students</p>
        <div className="event-card">
          <div className="card" data-aos="flip-down">
            <img src={img1} className="card-img-top" alt="" />
          </div>
          <div className="card" data-aos="flip-down">
            <img src={img2} className="card-img-top" alt="" />
          </div>
          <div className="card" data-aos="flip-down">
            <img src={img3} className="card-img-top" alt="" />
          </div>
        </div>
        <div className="event-btn mt-8">
          <Link to="/event" onClick={() => window.scrollTo(0, 0)}>
            <Button
              variant="contained"
              style={{ background: "#3c618a" }}
            >
              Checkout more events
            </Button>
          </Link>
        </div>
      </div>
      <div className="free-space"></div>
    </div>
  );
};

export default EventCard;
