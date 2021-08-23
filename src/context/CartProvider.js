import React, { useReducer, useContext } from "react"
import Actions from '../actions/Actions'
import { calculatePrice } from "../utils/CalculatePrice"
import { round2 } from '../utils/Math'

const reducer = (state, action) => {
  const { showCart, totalQuantity, totalPriceReal, totalPriceFinal } = state

  switch (action.type) {
    case Actions.TOGGLE:
      return {
        ...state,
        showCart: !showCart,
      }

    case Actions.HIDE:
      return {
        ...state,
        showCart: false,
      }

    case Actions.ADD: {
      const product = action.payload.product
      let quantity = action.payload.quantity || 1

      const newList = [...state.cartList]

      const newTotalPriceReal = totalPriceReal + product.price * quantity
      let newTotalPriceFinal = totalPriceFinal

      const duplicate = newList.find((item) => item.id === product.id)
      if (duplicate) {
        newTotalPriceFinal -= duplicate.priceWithDiscount
        duplicate.quantity = duplicate.quantity + quantity
        duplicate.priceWithDiscount = calculatePrice(
          duplicate.quantity,
          duplicate.price
        ).total
        newTotalPriceFinal += duplicate.priceWithDiscount
      } else {
        newList.push({
          id: product.id,
          name: product.name,
          img: product.img,
          price: product.price,
          quantity: quantity,
          country: product.country,
          priceWithDiscount: calculatePrice(quantity, product.price).total,
        })
        newTotalPriceFinal += calculatePrice(quantity, product.price).total
      }

      return {
        ...state,
        totalQuantity: totalQuantity + quantity,
        cartList: newList,
        totalPriceReal: newTotalPriceReal,
        totalPriceFinal: round2(newTotalPriceFinal),
        discount: 100 - Math.round((newTotalPriceFinal / newTotalPriceReal) * 100),
      }
    }

    case Actions.REMOVE: {
      const id = action.payload.id
      let quantity = 0,
        price = 0

      const newList = []
      for (let product of state.cartList) {
        if (product.id === id) {
          quantity = product.quantity
          price = product.price
        } else {
          newList.push(product)
        }
      }

      const newTotalPriceFinal = totalPriceFinal - calculatePrice(quantity, price).total
      const newTotalPriceReal = totalPriceReal - quantity * price
      return {
        ...state,
        totalQuantity: totalQuantity - quantity,
        cartList: newList,
        totalPriceReal: newTotalPriceReal,
        totalPriceFinal: round2(newTotalPriceFinal),
        discount: 100 - Math.round((newTotalPriceFinal / newTotalPriceReal) * 100),
      }
    }

    case Actions.CHANGE: {
      const { id, value } = action.payload
      const newList = [...state.cartList]
      const product = newList.find((item) => item.id === id)
      if (
        (product.quantity === 1 && value === -1) ||
        (product.quantity === 99 && value === 1)
      ) {
        return state
      }

      const newTotalPriceReal = totalPriceReal + product.price * value
      let newTotalPriceFinal = totalPriceFinal - product.priceWithDiscount
      product.quantity += value
      product.priceWithDiscount = calculatePrice(product.quantity, product.price).total
      newTotalPriceFinal += product.priceWithDiscount

      return {
        ...state,
        totalQuantity: totalQuantity + value,
        cartList: newList,
        totalPriceReal: newTotalPriceReal,
        totalPriceFinal: round2(newTotalPriceFinal),
        discount: 100 - Math.round((newTotalPriceFinal / newTotalPriceReal) * 100),
      }
    }
      
      case Actions.CLEAR: {
        return {
          showCart: false,
          cartList: [],
          totalQuantity: 0,
          totalPriceReal: 0,
          discount: 0,
          totalPriceFinal: 0,
          shipping: 0,
          voucher: [],
        }
      }

    default:
      return state
  }
}

const initialState = {
  showCart: false,
  cartList: [],
  totalQuantity: 0,
  totalPriceReal: 0,
  discount: 0,
  totalPriceFinal: 0,
  shipping: 0,
  voucher: [],
}

const CartContext = React.createContext()
export const useCartContext = () => {
  return useContext(CartContext)
}

const CartDispatchContext = React.createContext()
export const useCartDispatchContext = () => {
  return useContext(CartDispatchContext)
}

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(reducer, initialState)

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      <CartDispatchContext.Provider value={cartDispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}

export default CartProvider
