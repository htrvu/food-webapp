import React from "react"
import { DescriptionTable } from "../../../../data/Product/DescriptionTable"

const Description = ({category}) => {
  const formatCategory = category.split("-").reduce((res, word, index) => {
    if (index) res += " "
    res = res + word[0].toUpperCase() + word.slice(1)
    return res
  }, "")
  
  return (
    <>
      <p className="product-about__desc">
        Although the legendary Double Burger really needs no introduction, please allow
        us… Tucked in between three soft buns are two all-beef patties, cheddar cheese,
        ketchup, onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber
        mayonnaise add the crowning touch. Oh baby!
      </p>

      <div className="product-about__table">
        {DescriptionTable.map((column, index) => (
          <div key={column.title} className="product-about__column__wrapper">
            <div className="product-about__nutri">
              <div
                className={`product-about__nutri-title ${index === 0 ? "main-col" : ""}`}
              >
                {column.title || formatCategory}
              </div>
              <div className="product-about__nutri-desc">{column.description}</div>
            </div>
            <div className={`product-about__ingredient ${index === 0 ? "main-col" : ""}`}>
              {column.ingredients}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Description
