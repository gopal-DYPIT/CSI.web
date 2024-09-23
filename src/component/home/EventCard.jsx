import React from "react";
import "./EventCard.css";
import img1 from "../../assets/coderscarnival.jpg";
import img2 from "../../assets/innotech.jpg.png";
import img3 from "../../assets/acunetix9.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const EventCard = () => {
  return (
    <div className="event">
      <div className="event-header">
        <h1>Events</h1>
      </div>
      <div className="upcoming-event" data-aos="zoom-in">
        <h1>Upcoming Events</h1>
        <h2>Acunetix 10.0</h2>
        <p>
          This year we're celebrating the tenth year of ACUNETIX which is a
          flagship fest with a series of technical and non- technical events
          under it, in collaboration with ACES.
        </p>
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
        <div className="event-btn">
          <Link to="/event">
            <Button
              variant="contained"
              // href="/event"
              style={{ background: "#3c618a" }}
            >
              Checkout more event
            </Button>
          </Link>
        </div>
      </div>
      <div className="free-space"></div>
    </div>
  );
};

export default EventCard;
