import React from "react"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import StarIcon from "@material-ui/icons/Star"

const RateStar = ({ nStar, changeRate = () => {} }) => {
  return (
    <div className="rate-star__wrapper">
      {[1, 2, 3, 4, 5].map((index) =>
        index <= nStar ? (
          <StarIcon key={index} className="rate-star" onClick={() => changeRate(index)} />
        ) : (
          <StarBorderIcon key={index} className="rate-star" onClick={() => changeRate(index)} />
        )
      )}
    </div>
  )
}

export default RateStar
