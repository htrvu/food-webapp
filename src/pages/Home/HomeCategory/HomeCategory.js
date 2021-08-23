import React from "react"
import Container from "@material-ui/core/Container"
import CategorySlider from "./CategorySlider"
import CategoryBackground from "./CategoryBackground"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  parentVariants,
  leftInVariants,
  rightInVariants
} from "../Animation/AnimateVariants"

const HomeCategory = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <motion.div
      id="home-category"
      ref={ref}
      className="home-section"
      variants={parentVariants}
      initial="hide"
      animate={inView ? "visible" : ""}
    >
      <CategoryBackground />
      <Container>
        <div className="home-category__wrapper">
          <div className="home-section__heading__wrapper">
            <motion.p variants={leftInVariants} className="home-section__sub-heading">What we have?</motion.p>
            <motion.p variants={rightInVariants} className="home-section__heading">Browse Food Category</motion.p>
          </div>
          <CategorySlider />
        </div>
      </Container>
    </motion.div>
  )
}

export default HomeCategory
