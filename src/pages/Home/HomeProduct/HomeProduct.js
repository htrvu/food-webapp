import React from "react"
import ProductSlider from "./ProductSlider"
import Container from "@material-ui/core/Container"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import {
  parentVariants,
  leftInVariants,
  rightInVariants
} from "../Animation/AnimateVariants"

const HomeProduct = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <motion.div
      id="home-product"
      variants={parentVariants}
      initial="hide"
      animate={inView ? "visible" : ""}
      ref={ref}
      className="home-section"
    >
      <Container>
        <div className="home-section__heading__wrapper">
          <motion.p variants={rightInVariants} className="home-section__sub-heading">Quality Products</motion.p>
          <motion.p variants={leftInVariants} className="home-section__heading">
            Burger as expected <span className="highlight">dilicious</span> one
          </motion.p>
        </div>

        <ProductSlider />
      </Container>
    </motion.div>
  )
}

export default HomeProduct
