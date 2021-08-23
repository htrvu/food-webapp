import React from "react"
import Slider from "react-slick"
import HomeSlide from "./HomeSlide"
import SliderData from "../../../data/Home/SliderData"

const HomeSlider = () => {
  const sliderSettings = {
    dots: true,
    fade: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }
  
  return (
    <div className="home-slider">
      <Slider {...sliderSettings} className="home-slides">
        {SliderData.map((slide, index) => (
          <HomeSlide key={slide.id} slideInfo={slide} index={index} />
        ))}
      </Slider>
    </div>
  )
}

export default HomeSlider
