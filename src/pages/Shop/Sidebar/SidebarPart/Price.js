import React from "react"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { PriceData } from "../SidebarData"

const Price = ({ current, handleChange }) => {
  return (
    <div id="sidebar__price" className="shop__sidebar-part">
      <h3 className="sidebar-part__heading">Price</h3>
      <ul className="sidebar-part__list">
        <RadioGroup
          name="sidebar__price"
          value={JSON.stringify(current)}
          onChange={(e) => handleChange(JSON.parse(e.target.value))}
        >
          {PriceData.map((item) => (
            <li className="sidebar-part__item" key={item.title}>
              <FormControlLabel
                className="price-radio__group"
                value={JSON.stringify({ min: item.min, max: item.max })}
                control={<Radio className="price-radio__icon" color="primary" />}
                label={
                  <p
                    className={`sidebar-part__content ${
                      current.min === item.min && current.max === item.max ? "active" : ""
                    }`}
                  >
                    {item.title}
                  </p>
                }
              />
            </li>
          ))}
        </RadioGroup>
      </ul>
    </div>
  )
}

export default Price
