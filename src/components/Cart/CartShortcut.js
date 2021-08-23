import React from "react"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

import { useCartContext } from "../../context/CartProvider"
import Actions from "../../actions/Actions"

const CartShortcut = () => {
  const { cartState, cartDispatch } = useCartContext()

  const toggleCart = () => {
    cartDispatch({
      type: Actions.TOGGLE,
      payload: {},
    })
  }

  return (
    <div className="cart__icon" onClick={toggleCart}>
      <ShoppingCartIcon />
      <p className="cart__icon-badge">{cartState.totalQuantity}</p>
    </div>
  )
}

export default CartShortcut
