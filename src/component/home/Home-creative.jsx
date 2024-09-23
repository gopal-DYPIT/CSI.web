import React from "react";
import "./homeCreative.css";
import ghost from "../../assets/ghost-img.png";
import { Link } from "react-router-dom";

const HomeCreative = () => {
  return (
    <>
      <main className="main">
        {/* <!--==================== HOME ====================--> */}
        <section className="home">
          <div className="home__container container">
            <div className="home__data">
              {/* <span className="home__subtitle">Error 404</span> */}
              <h1 className="home__title">Hey Buddy</h1>
              <p className="home__description">
                Welcome to Computer Society of India, <br />  DIT Chapter
              </p>
              <Link to="/blog" className="home__button">
                Go Blog
              </Link>
            </div>

            <div className="home__img">
              <img src={ghost} alt="" />
              <div className="home__shadow"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeCreative;
