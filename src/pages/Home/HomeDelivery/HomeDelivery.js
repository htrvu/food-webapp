import React, { useState } from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton'

import {
  parentVariants,
  leftInVariants,
  rightInVariants,
  bottomUpVariants,
} from "../Animation/AnimateVariants"

const HomeDelivery = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  const [lastChild, setLastChild] = useState(false)

  return (
    <motion.div
      id="home-delivery"
      ref={ref}
      className="home-section"
      variants={parentVariants}
      initial="hide"
      animate={inView ? "visible" : ""}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={5}>
            <div className="home-section__heading__wrapper">
              <motion.p
                variants={leftInVariants}
                className="home-section__sub-heading"
              >
                Delivery
              </motion.p>
              <motion.p
                variants={rightInVariants}
                className="home-section__heading"
              >
                A Moments Of Delivered{" "}
                <span className="highlight">On Right Time & Place</span>
              </motion.p>
            </div>
            <motion.p
              variants={bottomUpVariants}
              className="home-delivery__content"
            >
              Food G is a restaurant, bar and coffee roastery located on a busy
              corner site in Farringdon's Exmouth Market. With glazed frontage
              on two sides of the building, overlooking the market and a
              bustling London inteon.
            </motion.p>
            <motion.div
              variants={bottomUpVariants}
              initial="hide"
              animate={lastChild ? "visible" : ""}
              className="home-delivery__contact"
            >
              <img src="./svgs/Home/small-delivery.svg" alt="small-delivery" />
              <div className="home-delivery__contact-info">
                <p>Delivery Order Num</p>
                <p className="contact__phone">0947124559</p>
              </div>
              <div>
                <PrimaryButton toPage="Shop">ORDER NOW</PrimaryButton>
              </div>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={7}>
            <motion.img
              variants={rightInVariants}
              onAnimationComplete={() => setLastChild(true)}
              className="home-delivery__image"
              src="./svgs/Home/big-delivery.svg"
              alt="big-delivery"
            />
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  )
}

export default HomeDelivery
