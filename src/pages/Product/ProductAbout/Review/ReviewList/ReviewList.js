import React from 'react'
import ReviewItem from './ReviewItem'

const ReviewList = ({reviewList}) => {
  return (
    <div className="review__list">
      {reviewList.length > 0 && (
        reviewList.map((review, index) => (
          <ReviewItem key={index} review={review} /> 
        ))
      )}
    </div>
  )
}

export default ReviewList
