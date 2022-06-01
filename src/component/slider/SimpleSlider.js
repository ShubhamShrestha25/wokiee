import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SimpleSlider.css";

const SimpleSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
  };
  return (
    <div className="sliders">
      <Slider {...settings}>
        <div>
          <img className="sliderImg" src="images/1.jpg" alt="" />
        </div>
        <div>
          <img className="sliderImg" src="images/2.jpg" alt="" />
        </div>
        <div>
          <img className="sliderImg" src="images/3.jpg" alt="" />
        </div>
        <div>
          <img className="sliderImg" src="images/4.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
