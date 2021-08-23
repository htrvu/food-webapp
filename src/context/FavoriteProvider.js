import React, { useReducer, useContext } from "react"
import Actions from "../actions/Actions"

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.TOGGLE:
      return {
        ...state,
        showFavorite: !state.showFavorite,
      }

    case Actions.HIDE:
      return {
        ...state,
        showFavorite: false,
      }

    case Actions.ADD: {
      const { product } = action.payload
      const duplicate = state.favoriteList.find(item => item.id === product.id)
      if (duplicate) return state
      return {
        ...state,
        favoriteList: [...state.favoriteList, {
          id: product.id,
          img: product.img,
          name: product.name,
          dsc: product.dsc,
          price: product.price
        }]
      }
    }
      
    case Actions.REMOVE: {
      const id = action.payload.id
      const newList = state.favoriteList.filter(item => item.id !== id)
      return {
        ...state,
        favoriteList: newList
      }
    }
      
    default:
      return state
  }
}

const initialState = {
  showFavorite: false,
  favoriteList: []
}

const FavoriteContext = React.createContext()
export const useFavoriteContext = () => {
  return useContext(FavoriteContext)
}

const FavoriteDispatchContext = React.createContext()
export const useFavoriteDispatchContext = () => {
  return useContext(FavoriteDispatchContext)
}

const FavoriteProvider = ({ children }) => {
  const [favoriteState, favoriteDispatch] = useReducer(reducer, initialState)

  return (
    <FavoriteContext.Provider value={{ favoriteState, favoriteDispatch }}>
      <FavoriteDispatchContext.Provider value={favoriteDispatch}>
        {children}
      </FavoriteDispatchContext.Provider>
    </FavoriteContext.Provider>
  )
}

export default FavoriteProvider
