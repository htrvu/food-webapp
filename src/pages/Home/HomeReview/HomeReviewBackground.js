import React from "react"
import { motion } from "framer-motion"

const HomeReviewBackground = () => {
  return (
    <>
      <motion.img
        src="./svgs/Home/bg-icon-4.svg"
        className="bg-icon bg-icon__4"
        alt="bg-icon-4"
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
        src="./svgs/Home/bg-icon-5.svg"
        className="bg-icon bg-icon__5"
        alt="bg-icon-5"
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
        src="./svgs/Home/bg-icon-6.svg"
        className="bg-icon bg-icon__6"
        alt="bg-icon-6"
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
        src="./svgs/Home/bg-icon-7.svg"
        className="bg-icon bg-icon__7"
        alt="bg-icon-7"
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
        src="./svgs/Home/bg-icon-8.svg"
        className="bg-icon bg-icon__8"
        alt="bg-icon-8"
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
    </>
  )
}

export default HomeReviewBackground
