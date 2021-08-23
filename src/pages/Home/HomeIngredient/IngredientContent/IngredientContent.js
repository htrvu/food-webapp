import React from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

import Container from "@material-ui/core/Container"

import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton"

import {
  parentVariants,
  leftInVariants,
  rightInVariants,
  bottomUpVariants,
} from "../../Animation/AnimateVariants"

const IngredientContent = () => {
  const [contentRef, contentInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <div ref={contentRef} className="home-ingredient__content">
      <Container>
        <motion.div
          variants={parentVariants}
          initial="hide"
          animate={contentInView ? "visible" : ""}
          className="home-section__heading__wrapper"
        >
          <motion.div
            variants={leftInVariants}
            className="home-section__sub-heading"
          >
            Best food
          </motion.div>
          <div className="home-section__heading">
            <motion.div variants={rightInVariants}>
              Super delicious <span className="highlight">Steak Hamburger</span>
            </motion.div>
            <motion.p variants={bottomUpVariants} className="highlight price">
              $25.00
            </motion.p>
            <motion.div
              variants={bottomUpVariants}
              className="home-ingredient__order-btn"
            >
              <PrimaryButton toPage="Shop">ORDER NOW</PrimaryButton>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default IngredientContent
