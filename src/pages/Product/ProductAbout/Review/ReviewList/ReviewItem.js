import React from "react"
import Avatar from "@material-ui/core/Avatar"
import RateStar from "../../../../../components/RateStar/RateStar"

const ReviewItem = ({ review }) => {
  return (
    <div className="review__item">
      <Avatar
        className="review__avatar"
        src="https://lh3.googleusercontent.com/a/AATXAJyKTxFmSD2R-mdOZTp3RC-CAd1GzY9tvZpoOVCm=s96-c"
      />
      <div className="review__item-content">
        <div className="review__info">
          <span className="review__name">{review.name}</span>
          <span className="review__time">{review.time}</span>
        </div>
        <div className="review__rate">
          <RateStar nStar={review.rate} />
        </div>
        <div className="review__comment">{review.comment}</div>
      </div>
    </div>
  )
}

export default ReviewItem
