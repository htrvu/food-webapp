import React from "react"
import { RateData } from "../SidebarData"
import RateStar from "../../../../components/RateStar/RateStar"

const Rate = ({ current, handleChange }) => {
  return (
    <div id="sidebar__rate" className="shop__sidebar-part">
      <h3 className="sidebar-part__heading">Rate</h3>
      <ul className="sidebar-part__list">
        {RateData.map((item) => (
          <li
            className="sidebar-part__item"
            key={item.rate}
            onClick={() => handleChange(item.rate)}
          >
            <RateStar nStar={item.rate} />
            <p className={`sidebar-part__content ${current === item.rate ? 'active' : ''}`}>
              {item.rate === 0 ? 'All' : `${item.rate}`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Rate
