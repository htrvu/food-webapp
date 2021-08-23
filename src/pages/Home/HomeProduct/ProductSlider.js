import React from "react"
import Slider from "react-slick"
import ProductData from "../../../data/Home/ProductData"
import ProductCard from "./ProductCard"

import { motion } from "framer-motion"

import { bottomUpVariants } from "../Animation/AnimateVariants"

const ProductSlider = () => {
  const sliderSetting = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <motion.div variants={bottomUpVariants} className="home-product__slider">
      <Slider {...sliderSetting}>
        {ProductData.map((product, index) => (
          <div key={index}>
            <ProductCard productInfo={product} />
          </div>
        ))}
      </Slider>
    </motion.div>
  )
}

export default ProductSlider
