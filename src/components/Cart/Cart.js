import React from "react"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"

import CartList from './CartList/CartList'
import CartSummary from './CartSummary/CartSummary'

import { useCartContext } from "../../context/CartProvider"
import Actions from "../../actions/Actions"

const parentVariants = {
  hide: {
    transition: {
      staggerChildren: 0.6,
      staggerDirection: 1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const overlayVariants = {
  hide: {
    opacity: 0.5,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    scale: 70,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
}

const cartVariants = {
  hide: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

const closeBtnVariants = {
  close: {
    rotate: 0,
    opacity: 0,
    x: 5,
    transition: {
      duration: 0.2,
      x: {
        delay: 0.2,
      },
      opacity: {
        delay: 0.2
      },
      type: 'tween'
    }
  }
}

const Cart = () => {
  const { cartState, cartDispatch } = useCartContext()
  
  const toggleCart = () => {
    cartDispatch({
      type: Actions.TOGGLE,
      payload: {},
    })
  }

  return (
    <AnimatePresence>
      {cartState.showCart && (
        <motion.div
          key="cart"
          variants={parentVariants}
          initial="hide"
          animate="visible"
          exit="hide"
          id="cart"
        >
          <motion.div
            key="cart__overlay"
            variants={overlayVariants}
            className="cart__overlay"
            onClick={toggleCart}
          />
          <motion.div
            key="cart__wrapper"
            className="cart__wrapper"
            onClick={(e) => e.stopPropagation()}
            variants={cartVariants}
          >
            <div className="cart__heading">
              <h2>SHOPPING CART</h2>
              <div className="cart__close-btn" onClick={toggleCart}>
                <motion.span
                  variants={closeBtnVariants}
                  initial={false}
                  exit="close"
                  className="close-btn close-btn__1"
                />
                <motion.span
                  variants={closeBtnVariants}
                  initial={false}
                  exit="close"
                  className="close-btn close-btn__2"
                />
              </div>
            </div>

            <CartList />

            <CartSummary />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Cart
