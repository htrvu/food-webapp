import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined"

const parentVariants = {
  hide: {},
  visible: {},
}

const imageVariants = {
  hide: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
}

const svgVariants = {
  hide: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1.25,
    },
  },
}

const leftVariants = {
  hide: {
    x: -30,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1,
      ease: "easeOut",
    },
  },
}

const rightVariants = {
  hide: {
    x: 30,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1.5,
      ease: "easeOut",
    },
  },
}

const CheckoutComplete = () => {
  return (
    <motion.div
      variants={parentVariants}
      initial="hide"
      animate="visible"
      className="checkout-complete"
    >
      <motion.div variants={imageVariants} className="checkout-complete__image">
        <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            variants={svgVariants}
            d="M7 25L27.3077 44L58.5 7"
            stroke="white"
            strokeWidth="13"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
      <motion.p variants={leftVariants} className="checkout-complete__noti">
        Your purchase was successfull 🍔
      </motion.p>
      <Link to="/shop">
        <motion.p variants={rightVariants} className="checkout-complete__buy-more">
          <LocalMallOutlinedIcon /> Buy more!
        </motion.p>
      </Link>
    </motion.div>
  )
}

export default CheckoutComplete
