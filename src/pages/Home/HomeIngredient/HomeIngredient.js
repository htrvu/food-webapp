import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { parentVariants } from "../Animation/AnimateVariants"

import IngredientThumb from "./IngredientThumb/IngredientThumb"
import IngredientContent from "./IngredientContent/IngredientContent"

const HomeIngredient = () => {
  const [ingredientRef, ingredientInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <motion.div
    ref={ingredientRef}
      id="home-ingredient"
      className="home-ingredient__wrapper"
      variants={parentVariants}
      initial="hide"
      animate={ingredientInView ? "visible" : ""}
    >
      <IngredientThumb />

      <IngredientContent />
    </motion.div>
  )
}

export default HomeIngredient
