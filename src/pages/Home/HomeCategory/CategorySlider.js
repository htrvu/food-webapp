import React, { useRef } from "react"
import Slider from "react-slick"
import IconButton from "@material-ui/core/IconButton"
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow"

import { motion } from "framer-motion"

import CategoryCard from "./CategoryCard"
import CategoryData from "../../../data/Home/CategoryData"

import { topDownVariants } from "../Animation/AnimateVariants"

const CategorySlider = () => {
  const slider = useRef(null)

  const sliderSetting = {
    dots: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <motion.div variants={topDownVariants} className="home-category__slider">
      <IconButton
        variant="contained"
        onClick={() => slider.current.slickPrev()}
        className="home-category__slider-btn"
      >
        <DoubleArrowIcon
          style={{
            transform: "rotate(180deg)",
          }}
        />
      </IconButton>
      <Slider ref={slider} {...sliderSetting}>
        {CategoryData.map((card) => (
          <div key={card.name}>
            <CategoryCard cardInfo={card} />
          </div>
        ))}
      </Slider>
      <IconButton
        variant="contained"
        onClick={() => slider.current.slickNext()}
        className="home-category__slider-btn"
      >
        <DoubleArrowIcon />
      </IconButton>
    </motion.div>
  )
}

export default CategorySlider
