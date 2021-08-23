import React, { useReducer, useContext } from "react"
import Actions from "../actions/Actions"

const ToastContext = React.createContext()

export const useToastContext = () => {
  return useContext(ToastContext)
}

const ToastDispatchContext = React.createContext()

export const useToastDispatchContext = () => {
  return useContext(ToastDispatchContext)
}

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD: {
      const newState = [
        {
          id: Date.now(),
          type: action.payload.type,
          message: action.payload.message
        },
        ...state,
      ]
      return newState
    }
    case Actions.REMOVE: {
      const newState = []
      for (let item of state) {
        if (item.id !== action.payload.id) {
          newState.push(item)
        }
      }
      if (newState.length === state.length) return state
      return newState
    }
    case Actions.POP: {
      const newState = [...state]
      newState.pop()
      return newState
    }
    default:
      return
  }
}

const ToastProvider = ({ children }) => {
  const [toastState, toastDispatch] = useReducer(reducer, [])

  return (
    <ToastContext.Provider value={{ toastState, toastDispatch }}>
      <ToastDispatchContext.Provider value={toastDispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastContext.Provider>
  )
}

export default ToastProvider
