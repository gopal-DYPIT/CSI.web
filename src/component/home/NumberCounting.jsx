import React, { useEffect } from "react";
import "./NumberCounting.css";

const NumberCounting = () => {
  useEffect(() => {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  });
  return (
    <>
    <h1 className="Number-overview">Overview</h1>
      <div className="Number-wrapper">
        <div className="Number-container" data-aos="flip-left" data-aos-delay="50">
          <div className="Number-num">
            <span className="num" data-val="5">
              0
            </span>
            <p>K+</p>
          </div>
          <p className="text">Participation</p>
        </div>
        <div className="Number-container" data-aos="flip-left" data-aos-delay="300">
          <div className="Number-num">
            <span className="num" data-val="100">
              000
            </span>
            <p>+</p>
          </div>
          <p className="text">Sponsors</p>
        </div>
        <div className="Number-container" data-aos="flip-left" data-aos-delay="700">
          <div className="Number-num">
            <span className="num" data-val="50">
              000
            </span>
            <p>+</p>
          </div>
          <p className="text">Events</p>
        </div>
        <div className="Number-container" data-aos="flip-left" data-aos-delay="1000">
          <div className="Number-num">
            <span className="num" data-val="500">
              000
            </span>
            <p>+</p>
          </div>
          <p className="text">Members</p>
        </div>
      </div>
    </>
  );
};

export default NumberCounting;
