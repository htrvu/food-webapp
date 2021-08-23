import React, { useState } from "react"
import Avatar from "@material-ui/core/Avatar"

import RateStar from "../../../../../components/RateStar/RateStar"
import PrimaryButton from "../../../../../components/PrimaryButton/PrimaryButton"

import Actions from '../../../../../actions/Actions'

const ReviewInput = ({ reviewDispatch }) => {
  const [rate, setRate] = useState(0)
  const [comment, setComment] = useState("")

  const addComment = () => {
    reviewDispatch({
      type: Actions.ADD,
      payload: {
        // Actuall, this will be user id
        name: 'Hoang Trong Vu',
        time: '1 minute ago',
        rate: rate,
        comment: comment
      }
    })
    setRate(0)
    setComment('')
  }

  return (
    <div className="review__input">
      <Avatar
        className="review__avatar"
        src="https://lh3.googleusercontent.com/a/AATXAJyKTxFmSD2R-mdOZTp3RC-CAd1GzY9tvZpoOVCm=s96-c"
      />
      <div className="review__input-content">
        <div className="review__input-rate">
          <RateStar nStar={rate} changeRate={setRate} />
          <p>(Please rate this product)</p>
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="review__input-comment"
          placeholder="Type your comment here..."
        />
        <div className="review__input-send" onClick={addComment}>
          <PrimaryButton scroll={false}>Comment</PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default ReviewInput
