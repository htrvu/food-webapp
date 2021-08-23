import React from "react"
import Button from "@material-ui/core/Button"
import RemoveIcon from "@material-ui/icons/Remove"
import AddIcon from "@material-ui/icons/Add"
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"

import { useCartDispatchContext } from "../../../../context/CartProvider"
import Actions from '../../../../actions/Actions'

const CartItem = ({product}) => {
  const cartDispatch = useCartDispatchContext()

  const handleDelete = (id) => {
    cartDispatch({
      type: Actions.REMOVE,
      payload: {id}
    })
  }

  const handleChange = (id, value) => {
    cartDispatch({
      type: Actions.CHANGE,
      payload: {id, value}
    })
  }

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="cart-item__info">
        <h3 className="cart-item__name">{product.name}</h3>
        <span className="cart-item__price">${product.priceWithDiscount}</span>
        <div className="cart-item__quantity">
          <Button className="cart-item__btn" variant="contained" onClick={() => handleChange(product.id, -1)}>
            <RemoveIcon />
          </Button>
          <span>{product.quantity}</span>
          <Button className="cart-item__btn" variant="contained" onClick={() => handleChange(product.id, 1)}>
            <AddIcon />
          </Button>
        </div>
      </div>
      <div className="cart-item__delete">
        <Button className="cart-item__btn" variant="contained" onClick={() => handleDelete(product.id)}>
          <DeleteOutlineIcon />
        </Button>
      </div>
    </div>
  )
}

export default CartItem
