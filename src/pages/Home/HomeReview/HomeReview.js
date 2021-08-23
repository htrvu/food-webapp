import React from "react"
import Slider from "react-slick"

import Container from "@material-ui/core/Container"

import ReviewSlide from "./ReviewSlide"
import HomeReviewBackground from "./HomeReviewBackground"
import ReviewData from "../../../data/Home/ReviewData"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { topDownVariants } from "../Animation/AnimateVariants"

const HomeReview = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const sliderSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
    <motion.div
      id="home-review"
      ref={ref}
      variants={topDownVariants}
      initial="hide"
      animate={inView ? "visible" : ""}
      className="home-section"
    >
      <HomeReviewBackground />
      <Container>
        <Slider {...sliderSettings}>
          {ReviewData.map((review) => (
            <div key={review.name}>
              <ReviewSlide data={review} />
            </div>
          ))}
        </Slider>
      </Container>
    </motion.div>
  )
}

export default HomeReview
