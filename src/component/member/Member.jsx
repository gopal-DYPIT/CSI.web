import React from "react";
import "./member.css";
import profile1 from "../../assets/profile1.jpg";

const Member = () => {
  return (
    <div className="member_container">
      {/* <!-- Card --> */}
      <div className="member_card">
        <div className="member_card__border">
          <div className="member_card__perfil">
            <img src={profile1} alt="card image" className="member_card__img" />
          </div>
        </div>

        <h3 className="member_card__name">Mynton Moore</h3>
        <span className="member_card__profession">Frontend Developer</span>

        {/* <!-- Card info --> */}
        <div className="info">
          <div className="info__icon">
            <i className="ri-information-line"></i>
          </div>

          <div className="info__border">
            <div className="info__perfil">
              <img src={profile1} alt="card image" className="info__img" />
            </div>
          </div>

          <div className="info__data">
            <h3 className="info__name">Jules Moore Mynton</h3>
            <span className="info__profession">
              Master in Frontend Developer
            </span>
            <span className="info__location">Lima - Perú</span>
          </div>

          <div className="info__social">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="info__social-link"
            >
              <span className="info__social-icon">
                <i className="ri-linkedin-box-line"></i>
              </span>
            </a>

            <a
              href="https://dribbble.com/"
              target="_blank"
              className="info__social-link"
            >
              <span className="info__social-icon">
                <i className="ri-dribbble-fill"></i>
              </span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="info__social-link"
            >
              <span className="info__social-icon">
                <i className="ri-github-fill"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
