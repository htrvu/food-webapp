import React, { useReducer, useContext } from "react"
import Actions from "../actions/Actions"

const ShopSidebarContext = React.createContext()
export const useShopSidebarContext = () => {
  return useContext(ShopSidebarContext)
}

const ShopSidebarDispatchContext = React.createContext()
export const useShopSidebarDispatchContext = () => {
  return useContext(ShopSidebarDispatchContext)
}

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.TOGGLE:
      return {
        ...state,
        showSidebarMobile: !state.showSidebarMobile,
      }
    case Actions.HIDE:
      return {
        ...state,
        showSidebarMobile: false,
      }
    default:
      return state
  }
}

const initialState = {
  showSidebarMobile: false,
}

const ShopSidebarProvider = ({ children }) => {
  const [shopSidebarState, shopSidebarDispatch] = useReducer(reducer, initialState)

  return (
    <ShopSidebarContext.Provider value={{ shopSidebarState, shopSidebarDispatch }}>
      <ShopSidebarDispatchContext.Provider value={shopSidebarDispatch}>
        {children}
      </ShopSidebarDispatchContext.Provider>
    </ShopSidebarContext.Provider>
  )
}

export default ShopSidebarProvider
