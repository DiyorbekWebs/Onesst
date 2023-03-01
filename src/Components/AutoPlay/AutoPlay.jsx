import React, { Component, useState } from "react";
import Slider from "react-slick";
import "./AutoPlay.scss";
import uy from "../../images/uy.png";
import { Hidden } from "@mui/material";

export default function SimpleSlider() {


 const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: -10000,
    variableWidth: true,
    cssEase: "linear",
    
  }

  console.log(settings.autoplaySpeed);
  return (
    <div className="anime__inner container">
      <Slider {...settings} >
        <div className="anime__one">
          <img className="anime__one" src={uy} alt="uy" />
        </div>
        <div className="anime__two">
          <img className="anime__two" src={uy} alt="uy" />
          <img className="anime__two" src={uy} alt="uy" />
        </div>
        <div className="anime__one">
          <img className="anime__one" src={uy} alt="uy" />
        </div>
        <div className="anime__two">
          <img className="anime__two" src={uy} alt="uy" />
          <img className="anime__two" src={uy} alt="uy" />
        </div>
        <div className="anime__one">
          <img className="anime__one" src={uy} alt="uy" />
        </div>
        <div className="anime__two">
          <img className="anime__two" src={uy} alt="uy" />
          <img className="anime__two" src={uy} alt="uy" />
        </div>
      </Slider>
    </div>
  );
}
