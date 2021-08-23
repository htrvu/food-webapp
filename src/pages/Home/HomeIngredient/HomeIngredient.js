import React from "react"

import IngredientThumb from "./IngredientThumb/IngredientThumb"
import IngredientContent from "./IngredientContent/IngredientContent"

const HomeIngredient = () => {
  return (
    <div id="home-ingredient" className="home-ingredient__wrapper">
      <IngredientThumb />
      <IngredientContent />
    </div>
  )
}

export default HomeIngredient
