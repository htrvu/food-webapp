import React from "react"

import Category from "./SidebarPart/Category"
import Price from "./SidebarPart/Price"
import Rate from "./SidebarPart/Rate"

import { useShopFilterContext } from "../../../context/ShopFilterProvider"
import { useApiContext } from "../../../context/ApiProvider"
import { ShopActions } from "../../../actions/ShopActions"

import { getQueryObjectFromState } from "../../../utils/QueryObject"

const Sidebar = () => {
  const { shopFilterState, shopFilterDispatch } = useShopFilterContext()
  const { getProducts } = useApiContext()

  const handleChangeCategory = (category) => {
    // Clear value of input element
    document.querySelector('.shop-manipulate__search-input').value = ''
    
    if (category === shopFilterState.category) return;
    
    shopFilterDispatch({
      type: ShopActions.CATEGORY,
      payload: { category },
    })
    getProducts(category)
  }

  const handleChangePrice = (price) => {
    if (price.min === shopFilterState.price.min && price.max === shopFilterState.price.max) return;

    shopFilterDispatch({
      type: ShopActions.PRICE,
      payload: { price },
    })
    const params = getQueryObjectFromState({
      ...shopFilterState,
      price: price
    })
    getProducts(shopFilterState.category, params)
  }

  const handleChangeRate = (rate) => {
    if (rate === shopFilterState.rate) return;

    shopFilterDispatch({
      type: ShopActions.RATE,
      payload: { rate },
    })
    const params = getQueryObjectFromState({
      ...shopFilterState,
      rate: rate
    })
    getProducts(shopFilterState.category, params)
  }

  return (
    <div className="shop__sidebar">
      <Category current={shopFilterState.category} handleChange={handleChangeCategory} />
      <Price current={shopFilterState.price} handleChange={handleChangePrice} />
      <Rate current={shopFilterState.rate} handleChange={handleChangeRate} />
    </div>
  )
}

export default Sidebar
