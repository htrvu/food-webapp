import React from "react"
import { motion } from 'framer-motion'

const IngredientCard = ({cardInfo}) => {
  const childrenVariants = {
    hide: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      },
    },
  }
  return (
    <div className="home-ingredient__card__wrapper">
      <motion.div variants={childrenVariants}  className="home-ingredient__card">
        <p className="ingredient__card__heading">{cardInfo.title}</p>
        <p className="ingredient__card__content">
          {cardInfo.content}
        </p>
        <span className="ingredient__card__number">0{cardInfo.id}</span>
      </motion.div>
    </div>
  )
}

export default IngredientCard
