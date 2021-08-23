import React, { useReducer, useContext } from "react"
import { ShopActions } from "../actions/ShopActions"

const reducer = (state, action) => {
  window.scroll({
    top: 250,
    behavior: "smooth",
  })

  switch (action.type) {
    case ShopActions.LOAD:
      return {
        ...action.payload,
      }
    case ShopActions.CATEGORY:
      const { category } = action.payload
      if (category === state.category) {
        return state
      }
      return {
        category: category,
        price: {
          min: 0,
          max: null,
        },
        rate: 0,
        searchString: "",
        sortMode: "default",
      }
    case ShopActions.PRICE:
      return {
        ...state,
        price: action.payload.price,
      }
    case ShopActions.RATE:
      return {
        ...state,
        rate: action.payload.rate,
      }
    case ShopActions.SEARCH:
      return {
        ...state,
        searchString: action.payload.searchString,
        category: "our-foods",
      }
    case ShopActions.SORT:
      return {
        ...state,
        sortMode: action.payload.sortMode,
      }
    case ShopActions.CLEAR:
      return {
        category: "best-foods",
        price: {
          min: 0,
          max: null,
        },
        rate: 0,
        searchString: "",
        sortMode: "default",
      }
    default:
      return state
  }
}

const initialState = {
  category: "best-foods",
  price: {
    min: 0,
    max: null,
  },
  rate: 0,
  searchString: "",
  sortMode: "default",
}

const ShopFilterContext = React.createContext()

export const useShopFilterContext = () => {
  return useContext(ShopFilterContext)
}

const ShopFilterProvider = ({ children }) => {
  const [shopFilterState, shopFilterDispatch] = useReducer(reducer, initialState)

  return (
    <ShopFilterContext.Provider value={{ shopFilterState, shopFilterDispatch }}>
      {children}
    </ShopFilterContext.Provider>
  )
}

export default ShopFilterProvider
