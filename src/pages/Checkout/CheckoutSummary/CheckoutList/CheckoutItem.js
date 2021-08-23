import React from "react"

const CheckoutItem = ({product}) => {
  return <div className="checkout__item">
    <div className="checkout__item__image">
      <img src={product.img} alt="1"/>
      <span>{product.quantity}</span>
    </div>
    <div className="checkout__item__info">
      <h3>{product.name}</h3>
      <p>{product.country}</p>
    </div>
    <div className="checkout__item__price">${product.priceWithDiscount}</div>
  </div>
}

export default CheckoutItem
