import React from "react"

const Banner = ({ children }) => {
  return (
    <div
      className="page__banner"
      style={{
        backgroundImage: "url('/images/Common/banner.jpg')",
      }}
    >
      {children}
    </div>
  )
}

export default Banner
