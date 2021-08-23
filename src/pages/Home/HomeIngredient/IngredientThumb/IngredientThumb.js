import React from "react"

import IngredientData from "../../../../data/Home/IngredientData"
import IngredientCard from "./IngredientCard"

const half = (IngredientData.length - (IngredientData.length % 2)) / 2
const leftArray = IngredientData.slice(0, half)
const rightArray = IngredientData.slice(half)

const IngredientThumb = () => {
  return (
    <div
      className="home-ingredient__thumb"
      style={{
        backgroundImage: "url('./images/Home/Ingredient/ingredient.jpg')",
      }}
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
    </div>
  )
}

export default IngredientThumb
