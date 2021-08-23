import React from "react"

import Avatar from "@material-ui/core/Avatar"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import ListAltIcon from "@material-ui/icons/ListAlt"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"

import CheckoutForm from "./CheckoutForm/CheckoutForm"

const CheckoutInfo = ({ isSubmitting, setIsSubmitting, setIsCompleted }) => {
  return (
    <div className="checkout-info">
      <div className="checkout__step__wrapper">
        <div className="checkout__step complete">
          <div className="checkout__step__icon">
            <AddShoppingCartIcon />
          </div>
          <p className="checkout__step__label">Shopping</p>
        </div>
        <div className="checkout__step__connector complete"></div>
        <div className="checkout__step complete">
          <div className="checkout__step__icon">
            <ListAltIcon />
          </div>
          <p className="checkout__step__label">Confirm</p>
        </div>
        <div className={`checkout__step__connector ${isSubmitting ? 'complete' : ''}`}></div>
        <div className={`checkout__step ${isSubmitting ? 'complete' : ''}`}>
          <div className="checkout__step__icon">
            <ThumbUpIcon />
          </div>
          <p className="checkout__step__label">Success</p>
        </div>
      </div>
      <div className="checkout__contact">
        <h1 className="contact__heading">Contact Infomation</h1>
        <div className="contact__account">
          <Avatar className="contact__account__avatar" />
          <div className="contact__account__info">
            <p className="contact__account__name">Hoang Trong Vu</p>
            <p className="contact__account__logout">Log out</p>
          </div>
        </div>
        <FormControlLabel
          className="contact__account__checkbox"
          control={<Checkbox color="primary" />}
          label="Keep me up to date on news and offers"
        />
      </div>

      <div className="checkout__form">
        <h1 className="form__heading">Shipping Address</h1>
        <CheckoutForm setIsSubmitting={setIsSubmitting} setIsCompleted={setIsCompleted}/>
      </div>
    </div>
  )
}

export default CheckoutInfo
