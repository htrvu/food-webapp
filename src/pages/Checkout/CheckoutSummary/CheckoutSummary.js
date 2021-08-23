import React from "react"
import CheckoutList from "./CheckoutList/CheckoutList"
import SummaryBackground from "./SummaryBackground/SummaryBackground"

import Button from "@material-ui/core/Button"

import { useSizeContext } from "../../../context/SizeProvider"
import { useCartContext } from "../../../context/CartProvider"

const CheckoutSummary = () => {
  const phoneSize = useSizeContext()
  const { cartList, discount, totalPriceFinal, shipping } = useCartContext().cartState

  return (
    <div className="checkout-summary">
      <SummaryBackground />
      <CheckoutList cartList={cartList} />

      <div className="checkout__code">
        <div className="checkout__code-input__wrapper">
          <input
            className="checkout__code-input"
            placeholder={`${phoneSize ? "Discount code" : "Enter your discount code..."}`}
          />
        </div>
        <Button className="checkout__code-btn btn--primary">APPLY</Button>
      </div>
      
      <div className="checkout__mores">
        <div className="checkout__more">
          <p>Discount</p>
          <p>{discount}%</p>
        </div>
        <div className="checkout__more">
          <p>Shipping Cost</p>
          <p>{shipping ? `$${shipping}` : 'Free'}</p>
        </div>
        <div className="checkout__more">
          <p>Taxes</p>
          <p>$0.00</p>
        </div>
      </div>
      
      <div className="checkout__total">
        <p>Total</p>
        <p>${totalPriceFinal}</p>
      </div>
    </div>
  )
}

export default CheckoutSummary
