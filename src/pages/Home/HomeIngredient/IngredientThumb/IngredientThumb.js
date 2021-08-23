import React from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

import IngredientData from "../../../../data/Home/IngredientData"
import IngredientCard from "./IngredientCard"

import { parentVariants } from "../../Animation/AnimateVariants"

const half = (IngredientData.length - (IngredientData.length % 2)) / 2
const leftArray = IngredientData.slice(0, half)
const rightArray = IngredientData.slice(half)

const IngredientThumb = () => {
  const [thumbRef, thumbInView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={thumbRef}
      className="home-ingredient__thumb"
      style={{
        backgroundImage: "url('./images/Home/Ingredient/ingredient.jpg')",
      }}
      variants={parentVariants}
      initial="hide"
      animate={thumbInView ? "visible" : ""}
    >
      <div className="home-ingredient__side">
        {leftArray.map((card) => (
          <IngredientCard key={card.id} cardInfo={card} />
        ))}

        <div
          className="ingredient__card__silk"
          style={{
            backgroundImage: "url('./images/Home/Ingredient/silk_1.png')",
          }}
        />
      </div>

      <div className="home-ingredient__side">
        {rightArray.map((card) => (
          <IngredientCard key={card.id} cardInfo={card} />
        ))}

        <div
          className="ingredient__card__silk"
          style={{
            backgroundImage: "url('./images/Home/Ingredient/silk_2.png')",
          }}
        />
      </div>
    </motion.div>
  )
}

export default IngredientThumb
