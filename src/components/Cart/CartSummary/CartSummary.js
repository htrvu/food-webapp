import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { motion } from "framer-motion"

import Button from "@material-ui/core/Button"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import StoreIcon from "@material-ui/icons/Store"

import { useToastDispatchContext } from "../../../context/ToastProvider"
import Actions from '../../../actions/Actions'
import { useCartContext } from "../../../context/CartProvider"

const CartSummary = () => {
  const [showMore, setShowMore] = useState(false)
  const { cartState } = useCartContext()
  const toastDispatch = useToastDispatchContext()

  const history = useHistory()
  const handleCheckout = () => {
    if (cartState.cartList.length === 0) {
      toastDispatch({
        type: Actions.ADD,
        payload: {
          type: 'error',
          message: "Your cart is empty!"
        }
      })
    }
    else {
      history.push('/checkout')
    }
  }

  return (
    <div className="cart__summary__wrapper">
      <div className="summary__more" onClick={() => setShowMore(!showMore)}>
        <span className="summary__more-btn" />
      </div>
      <motion.div
        className="summary__detail"
        initial={{
          height: 0,
          transition: {
            duration: 0.4,
          },
        }}
        animate={{
          height: showMore ? "auto" : 0,
          transition: {
            duration: 0.4,
            ease: "easeOut",
          },
        }}
      >
        <h3>Order Info</h3>
        <div className="summary__list">
          <div className="summary__item">
            <span>Discount</span>
            <span>{cartState.discount}%</span>
          </div>
          <div className="summary__item">
            <span>Shipping Cost</span>
            <span>{cartState.shipping ? `${cartState.shipping}` : "Free"}</span>
          </div>
          <div className="summary__item">
            <span>Voucher</span>
            <span>{cartState.voucher.length > 0 ? "Voucher" : "None"}</span>
          </div>
        </div>
      </motion.div>
      <div className="summary__total">
        <span>Total</span>
        <span className="summary__price">${cartState.totalPriceFinal}</span>
      </div>
      <div className="summary__buttons">
        <Button
          startIcon={<ShoppingCartIcon />}
          variants="contained"
          className="summary__btn summary__btn--checkout"
          onClick={handleCheckout}
        >
          CHECKOUT
        </Button>
        <Button
          startIcon={<StoreIcon />}
          variants="contained"
          className="summary__btn"
          onClick={() => {
            history.push("/shop")}
          }
        >
          BUY MORE
        </Button>
      </div>
    </div>
  )
}

export default CartSummary
