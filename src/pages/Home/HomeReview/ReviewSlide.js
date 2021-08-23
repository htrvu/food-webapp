import React from "react"

const ReviewSlide = ({ data }) => {
  return (
    <div className="home-review__slide">
      <div className="home-review__avatar">
        <img src={data.avatar} alt={data.name} className="rounded-tag"/>
      </div>
      <p className="home-review__name">{data.name}</p>
      <p className="home-review__job">{data.job}</p>
      <p className="home-review__comment">{data.comment}</p>
    </div>
  )
}

export default ReviewSlide
