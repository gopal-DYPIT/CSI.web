import { Devices } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import img1 from "../../assets/C3.jpg";
import img2 from "../../assets/C1.jpg";
import img3 from "../../assets/C2.jpg";
import img4 from "../../assets/C4.jpg";
import img5 from "../../assets/C5.jpg";
import "./Home.css";
import NumberCounting from "./NumberCounting";

const carouselItems = [
  {
    title: "What is CSI?",
    content: `Computer Society of India (CSI) is a body where computer 
              professionals meet to exchange views & information, to learn & 
              share ideas and is committed to the advancement of theory and 
              practice of Computer Engineering and Technology. It was started 
              on 6 March 1965 by few computer professionals.`,
    linkText: "Blog",
    linkTo: "/blog",
  },
  {
    title: "Overview of CSI",
    content: `CSI is the oldest & largest organization of IT 
              professional in India having more than 1,00,000 members 
              across the country exclusively focusing on the interest of 
              IT Professionals. One of the major initiatives of the 
              Computer Society of India is to serve the student 
              community by bridging the gap between academia and 
              industry. CSI DIT Chapter promotes various activities 
              among their student branches such as seminars, workshops, 
              conferences, symposium, quiz competition, project 
              competition and many more.`,
    linkText: "About More",
    linkTo: "/blog",
  },
  {
    title: "CSI Mission",
    content: (
      <ul className="list">
        <li>Facilitate Research, Knowledge Sharing, Learning and Career Enhancement among all categories of IT professionals.</li>
        <li>Inspire, nurture and assist students to integrate into the IT community.</li>
        <li>Percolate benefits of IT advancement to all sections of Indian Society.</li>
        <li>Professional Development at Individual level and Career Support.</li>
        <li>To create a distinguished fraternity of famous IT industry leaders, brilliant scientists and dedicated academicians.</li>
      </ul>
    ),
    linkText: "About More",
    linkTo: "/blog",
  },
];

const Home = () => {
  return (
    <div className="home-page" data-aos="fade-up">
      <h3 className="text-center pt-5 mb-5">
        Welcome to <span className="text-aqua">Computer Society of India</span>, DIT Chapter
      </h3>
      <div className="container-fluid py-4 p-sm-5 overview">
        <div className="row firstRow">
          <div className="col-sm-6">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                {carouselItems.map((item, index) => (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <div className="d-block w-100" data-interval="3000" alt="...">
                      <h1>{item.title}</h1>
                      {typeof item.content === 'string' ? <p className="slider-p">{item.content}</p> : item.content}
                      <Link className="home__button" to={item.linkTo}>{item.linkText}</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div id="carouselExampleFade-2" className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                {[img1, img2, img3, img4, img5].map((img, index) => (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <img src={img} className="d-block w-100" data-interval="2000" alt="..." />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-target="#carouselExampleFade-2" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-target="#carouselExampleFade-2" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 timeline">
        <div className="offer" style={{ background: "#3c618a" }}>
          <h1>What CSI Offers?</h1>
        </div>
        <div className="wrapper">
          <div className="center-line"></div>
          {["Technology Updates", "Interactive Activities", "Networking", "Training & Certification"].map((title, index) => (
            <div className={`row row-${index % 2 === 0 ? '1' : '2'}`} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} key={index}>
              <section>
                <div className="icon">
                  <Devices />
                </div>
                <div className="details">
                  <span className="title">{title}</span>
                </div>
                <p>
                  {title === "Technology Updates" && "Updates of Latest Technology through Conferences, Lectures, Seminars, Tutorials and Workshops."}
                  {title === "Interactive Activities" && "Project & Paper presentations, Quizzes, Competitions and Exhibitions."}
                  {title === "Networking" && "Ability to connect and interact with distinguished speakers, experts and peers on different technology areas."}
                  {title === "Training & Certification" && "Get Appreciation letters /certifications from a nationally recognized professional IT body."}
                </p>
              </section>
            </div>
          ))}
        </div>
        <div className="free-space"></div>
      </div>
      <NumberCounting />
      <EventCard />
    </div>
  );
};

export default Home;
