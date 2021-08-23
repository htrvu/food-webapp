import React from "react"
import { motion } from "framer-motion"

const SummaryBackground = () => {
  return (
    <>
      <motion.img
        src="./svgs/Checkout/bg-icon-blur-4.svg"
        className="bg-icon bg-icon__1"
        alt="bg-icon-1"
        initial={{
          scale: 1,
        }}
        animate={{
          scale: 1.15,
          transition: {
            duration: 3.5,
            delay: 0.2,
            repeat: Infinity,
            repeatType: 'reverse'
          },
        }}
      />
      <motion.img
        src="./svgs/Checkout/bg-icon-blur-1.svg"
        className="bg-icon bg-icon__2"
        alt="bg-icon-2"
        initial={{
          y: 0,
        }}
        animate={{
          y: -10,
          transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse'
          },
        }}
      />
      <motion.img
        src="./svgs/Checkout/bg-icon-blur-2.svg"
        className="bg-icon bg-icon__3"
        alt="bg-icon-3"
        initial={{
          y: 0,
        }}
        animate={{
          y: -10,
          transition: {
            duration: 3,
            delay: 0.5,
            repeat: Infinity,
            repeatType: 'reverse'
          },
        }}
      />
      <motion.img
        src="./svgs/Checkout/bg-icon-blur-3.svg"
        className="bg-icon bg-icon__4"
        alt="bg-icon-4"
        initial={{
          scale: 1,
        }}
        animate={{
          scale: 1.15,
          transition: {
            duration: 3.5,
            delay: 0.2,
            repeat: Infinity,
            repeatType: 'reverse'
          },
        }}
      />
    </>
  )
}

export default SummaryBackground
