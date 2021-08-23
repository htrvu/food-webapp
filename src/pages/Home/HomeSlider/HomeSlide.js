import React from "react"
import { motion } from "framer-motion"

import Container from "@material-ui/core/Container"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"

import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton"

const HomeSlide = ({ slideInfo, index }) => {
  const parentVariants = {
    hide: {},
    visible: {
      transition: {
        staggerChildren: 0.8,
      },
    },
  }
  const titleVariants = {
    hide: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }
  const descVariants = {
    hide: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }
  const buttonVariants = {
    hide: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }
  return (
    <div>
      <div
        className="home-slide__wrapper"
        style={{
          backgroundImage: `url(${slideInfo.image})`,
        }}
      >
        <Container>
          {index === 0 ? (
            <motion.div
              variants={parentVariants}
              initial="hide"
              animate="visible"
              className="home-slide__content"
            >
              <motion.p variants={titleVariants} className="home-slide__title">
                {slideInfo.title}
              </motion.p>
              <motion.p variants={descVariants} className="home-slide__desc">
                {slideInfo.description} <span>{slideInfo.main}</span>
              </motion.p>
              <motion.div
                className="home-slide__order"
                variants={buttonVariants}
              >
                <PrimaryButton
                  toPage="Shop"
                  startIcon={<AddShoppingCartIcon />}
                >
                  ORDER NOW
                </PrimaryButton>
              </motion.div>
            </motion.div>
          ) : (
            <div className="home-slide__content">
              <p className="home-slide__title">{slideInfo.title}</p>
              <p className="home-slide__desc">
                {slideInfo.description} <span>{slideInfo.main}</span>
              </p>

              <div className="home-slide__order">
                <PrimaryButton
                  toPage="Shop"
                  startIcon={<AddShoppingCartIcon />}
                >
                  ORDER NOW
                </PrimaryButton>
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  )
}

export default HomeSlide
