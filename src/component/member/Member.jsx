import React from "react";
import "./member.css";
import profile1 from "../../assets/ProfileImg/VKS.png";
import profile2 from "../../assets/ProfileImg/KT.png"; 
import profile3 from "../../assets/ProfileImg/KS.png"; 
import profile4 from "../../assets/ProfileImg/GK.png"; 
import profile5 from "../../assets/ProfileImg/DW.png"; 
import profile6 from "../../assets/ProfileImg/KC.png"; 
import profile7 from "../../assets/ProfileImg/RB.png";

const members = [
  {
    name: "Vicky Kumar Sinha",
    profession: "President",
    fullName: "Vicky Kumar Sinha",
    College: "Dr. D.Y. Patil Institute of Technology, Pimpri, Pune",
    Branch: "Computer Engineering",
    imgSrc: profile1, 
    tenure: "2024-25",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/vicky-kumar-sinha-b546a01b4/",
      instagram: "https://www.instagram.com/iamvks09?igsh=a3BiZXZhaWp3enE5",
    },
  },
  {
    name: "Khilesh Thakur",
    profession: "Secretary",
    fullName: "Khilesh Thakur",
    College: "Dr. D.Y. Patil Institute of Technology, Pimpri, Pune",
    Branch: "Computer Engineering",
    imgSrc: profile2, 
    tenure: "2024-25",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/khilesh-thakur-a09865228/",
      instagram: "https://www.instagram.com/omthakur.insta?igsh=MXEyY2c5ZG1wbHllcQ==",
    },
  },
  {
    name: "Kartikey Singh",
    profession: "Director",
    fullName: "Kartikey Singh",
    College: "Dr. D.Y. Patil Institute of Technology, Pimpri, Pune",
    Branch: "Computer Engineering",
    imgSrc: profile3, 
    tenure: "2024-25",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kartikey-singh-165588229/",
      instagram: "https://www.instagram.com/rishu_kartikey?igsh=Z2NmbWp5NmZ6bXg1",
    },
  },
  {
    name: "Gopal Kadam",
    profession: "Growth Strategist",
    fullName: "Gopal Kadam",
    College: "Dr. D.Y. Patil Institute of Technology, Pimpri, Pune",
    Branch: "Computer Engineering",
    imgSrc: profile4, 
    tenure: "2024-25",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/gopalkadam212",
      instagram: "https://www.instagram.com/gopal.kadam_/",
    },
  },
  {
    name: "Dipanshu Wanjari",
    profession: "Growth Strategist",
    fullName: "Dipanshu Wanjari",
    College: "Dr. D.Y. Patil Institute of Technology, Pimpri, Pune",
    Branch: "Computer Engineering",
    imgSrc: profile5, 
    tenure: "2024-25",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dipanshu-wanjari-977439228/",
      instagram: "https://www.instagram.com/dipanshu27?igsh=dG5wcHpxczVlMnBj",
    },
  },
  {
    name: "Khushi Choudhary",
    profession: "Growth Strategist",
    fullName: "Khushi Choudhary",
    College: "Dr. D.Y. Patil Institute of Technology, Pimpri, Pune",
    Branch: "Computer Engineering",
    imgSrc: profile6, 
    tenure: "2024-25",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/khushi-chaudhari-5975a6229/",
      instagram: "https://www.instagram.com/khushii_chaudhari_?igsh=cnA1MnV4YnJrMTZu",
    },
  },
  {
    name: "Rishi Bandari",
    profession: "Growth Strategist",
    fullName: "Rishi Bandari",
    College: "Dr. D.Y. Patil Institute of Technology, Pimpri, Pune",
    Branch: "Computer Engineering",
    imgSrc: profile7, 
    tenure: "2024-25",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/rishi-bhandari-1bba2322b/",
      instagram: "https://www.instagram.com/bhandaririshi2003?igsh=MWQ2emhieXhmMGRoYw==",
    },
  },
];

const Member = () => {
  return (
    <div className="member_container">
      {members.map((member, index) => (
        <div className="member_card" key={index}>
          <div className="member_card__border">
            <div className="member_card__perfil">
              <img src={member.imgSrc} alt="card image" className="member_card__img" />
            </div>
          </div>

          <h3 className="member_card__name">{member.name}</h3>
          <span className="member_card__profession">{member.profession}</span>
          <span className="member_card__tenure">{member.tenure}</span>

          <div className="info">
            <div className="info__icon">
              <i className="ri-information-line"></i>
            </div>

            <div className="info__border">
              <div className="info__perfil">
                <img src={member.imgSrc} alt="card image" className="info__img" />
              </div>
            </div>

            <div className="info__data">
              <h3 className="info__name">{member.fullName}</h3>
              <span className="info__profession">{member.College}</span>
              <span className="info__location">{member.Branch}</span>
            </div>

            <div className="info__social">
              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="info__social-link">
                <span className="info__social-icon">
                  <i className="ri-linkedin-box-line"></i>
                </span>
              </a>

              <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="info__social-link">
                <span className="info__social-icon">
                  <i className="ri-instagram-line"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Member;

// export default Member;
