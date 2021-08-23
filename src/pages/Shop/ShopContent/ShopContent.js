import React, { useState }  from "react"
import ShopManipulate from "./ShopManipulate/ShopManipulate"
import ShopProduct from "./ShopProduct/ShopProduct"
import ShopPagination from "./ShopPagination/ShopPagination"

const ShopContent = ({ category }) => {
  const [layoutList, setLayoutList] = useState(false)

  const changeLayout = () => {
    setLayoutList(!layoutList)
  }

  return (
    <div id="shop-content">
      <ShopManipulate layoutList={layoutList} changeLayout={changeLayout} />
      <ShopProduct category={category} layoutList={layoutList} />
      <ShopPagination />
    </div>
  )
}

export default ShopContent
