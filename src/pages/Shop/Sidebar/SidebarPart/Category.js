import React from "react"
import { CategoryData } from "../SidebarData"

const Category = ({current, handleChange}) => {
  return (
    <div id="sidebar__category" className="shop__sidebar-part">
      <h3 className="sidebar-part__heading">Category</h3>
      <ul className="sidebar-part__list">
        {CategoryData.map((item) => (
          <li
            className={`sidebar-part__item ${
              current === item.category ? "active" : ""
            }`}
            key={item.title}
            onClick={() => handleChange(item.category)}
          >
            <img className="sidebar-part__icon" src={item.image} alt={item.title} />
            <p className="sidebar-part__content">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category
