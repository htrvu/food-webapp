import React from "react"

import CheckoutItem from "./CheckoutItem"

const CheckoutList = ({ cartList }) => {
  return cartList.length > 0 ? (
    <div className="checkout__list">
      {cartList.map((item) => (
        <CheckoutItem key={item.id} product={item} />
      ))}
    </div>
  ) : (
    <div className="checkout__list-empty">
      <img src="/svgs/Checkout/empty-cart.svg" alt="empty-cart" />
      <p>Your cart is empty... 🍔</p>
    </div>
  )
}

export default CheckoutList
