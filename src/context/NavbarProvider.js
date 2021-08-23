import React, { useReducer, useContext } from "react"
import Actions from "../actions/Actions"

const NavbarContext = React.createContext()
export const useNavbarContext = () => {
  return useContext(NavbarContext)
}

const NavbarDispatchContext = React.createContext()
export const useNavbarDispatchContext = () => {
  return useContext(NavbarDispatchContext)
}

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.TOGGLE:
      return {
        ...state,
        showNavMobile: !state.showNavMobile,
      }
    case Actions.HIDE:
      return {
        ...state,
        showNavMobile: false,
      }
    default:
      return state
  }
}

const initialState = {
  showNavMobile: false,
}

const NavbarProvider = ({ children }) => {
  const [navbarState, navbarDispatch] = useReducer(reducer, initialState)

  return (
    <NavbarContext.Provider value={{ navbarState, navbarDispatch }}>
      <NavbarDispatchContext.Provider value={navbarDispatch}>
        {children}
      </NavbarDispatchContext.Provider>
    </NavbarContext.Provider>
  )
}

export default NavbarProvider
