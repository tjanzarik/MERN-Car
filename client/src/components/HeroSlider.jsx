import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import "../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero_slider">
      <div className="slider_item slider_item-01 mt0">
        <Container>
          <div className="slider_content">
            <h6 className="text-light mb-3"></h6>
            <h1></h1>
          </div>
        </Container>
      </div>

      <div className="slider_item slider_item-02 mt0">
        <Container>
          <div className="slider_content">
            <h6 className="text-light mb-3"></h6>
            <h1></h1>
          </div>
        </Container>
      </div>

      <div className="slider_item slider_item-03 mt0">
        <Container>
          <div className="slider_content">
            <h6 className="text-light mb-3"></h6>
            <h1></h1>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
