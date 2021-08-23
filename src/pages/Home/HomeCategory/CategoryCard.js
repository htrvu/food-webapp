import React from 'react'

const CategoryCard = ({ cardInfo }) => {
  return (
    <div className="category-card__wrapper">
      <div className="category-card__thumb__wrapper">
        <img className="category-card__thumb" src={cardInfo.image} alt={cardInfo.name}/>
      </div>
      <p className="category-card__content">{cardInfo.name}</p>
    </div>
  )
}

export default CategoryCard
