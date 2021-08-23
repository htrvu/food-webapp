import React, {useContext, useReducer } from 'react'
import Actions from '../actions/Actions'

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD: {
      // Actually, we use user id
      const newReview = {
        name: action.payload.name,
        time: action.payload.time,
        rate: action.payload.rate,
        comment: action.payload.comment
      }
      return {
        ...state,
        reviewList: [...state.reviewList, newReview]
      }
    }
    default:
      return state
  }
}

const initialState = {
  reviewList: [
    {
      name: 'Hoang Trong Vu',
      rate: 5,
      time: '1 day ago',
      comment: 'Mlem mlem 💖'
    }
  ]
}

const ReviewContext = React.createContext()

export const useReviewContext = () => {
  return useContext(ReviewContext)
}

const ReviewProvider = ({children}) => {
  const [reviewState, reviewDispatch] = useReducer(reducer, initialState)
  return (
    <ReviewContext.Provider value={{reviewState, reviewDispatch}}>
      {children}
    </ReviewContext.Provider>
  )
}

export default ReviewProvider
