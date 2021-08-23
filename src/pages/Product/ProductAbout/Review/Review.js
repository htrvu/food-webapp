import React from 'react'
import ReviewInput from './ReviewInput/ReviewInput'
import ReviewList from './ReviewList/ReviewList'

import { useReviewContext} from '../../../../context/ReviewProvider'

const Review = () => {
  const { reviewState, reviewDispatch } = useReviewContext()
  return (
    <div>
      <ReviewList reviewList={reviewState.reviewList} />
      <ReviewInput reviewDispatch={reviewDispatch} />
    </div>
  )
}

export default Review
