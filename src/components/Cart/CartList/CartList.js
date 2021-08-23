import React from "react"
import CartItem from './CartItem/CartItem'
import { useCartContext } from "../../../context/CartProvider"

const CartList = () => {
  const {cartState} = useCartContext()

  const cartList = cartState.cartList

  return cartList.length === 0 ? (
    <div className="empty-card__wrapper">
      <img
        className="empty-card__image"
        src="/svgs/Common/empty-cart.svg"
        alt="empty-cart"
      />
      <h3 className="empty-card__text">Your card is empty 🍔</h3>
    </div>
  ) : (
    <div className="cart-list">
      {cartList.map(product => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default CartList
