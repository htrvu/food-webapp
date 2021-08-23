import React from "react"
import { Link } from "react-router-dom"
import { Formik, Form } from "formik"

import Button from "@material-ui/core/Button"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"

import FormField from './FormField'
import FormSelect from "./FormSelect"

import { useCartContext } from '../../../../context/CartProvider'
import { useToastDispatchContext } from "../../../../context/ToastProvider"
import Actions from '../../../../actions/Actions'

import CountriesList from '../../../../data/Checkout/CountriesList'

const initialValues = {
  firstName: "",
  lastName: "",
  address: "",
  country: null,
  phone: "",
}

const validate = (value) => {
  const error = {}
  let phone = value.phone
  if (phone) phone = phone.replace(/\s/g, "")

  const regex = /^[0-9]{10,11}$/
  if (!value.firstName || !value.firstName.trim()) {
    error.firstName = "This information is required"
  }

  if (!value.lastName || !value.lastName.trim()) {
    error.lastName = "This information is required"
  }

  if (!value.address || !value.address.trim()) {
    error.address = "This information is required"
  }

  if (!value.country || !value.country.trim()) {
    error.country = "This information is required"
  }

  if (!phone) {
    error.phone = "This information is required"
  } else if (!regex.test(phone)) {
    error.phone = "Your phone number is invalid"
  }

  return error
}

const CheckoutForm = ({setIsSubmitting, setIsCompleted}) => {
  const { cartState, cartDispatch } = useCartContext()
  const { cartList, totalPriceFinal } = cartState

  const toastDispatch = useToastDispatchContext()

  const clearCart = () => {
    cartDispatch({
      type: Actions.CLEAR
    })
  }

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={async (value, { setSubmitting, resetForm }) => {
          if (cartList.length > 0) {
            window.scroll({
              top: 150,
              behavior: 'smooth'
            })
            
            console.log(cartList, totalPriceFinal, value)
            setIsSubmitting(true)
            // call API
            await sleep(800)
            
            resetForm()
            setIsSubmitting(false)
            clearCart()
            
            // end the cycle of formik
            setSubmitting(false)
  
            setIsCompleted(true)
          }
          else {
            toastDispatch({
              type: Actions.ADD,
              payload: {
                type: 'error',
                message: "Your cart is empty!"
              }
            })
            resetForm()
            setSubmitting(false)
          }
        }}
      >
        <Form className="form__wrapper">
          <div className="form__row">
            <FormField name="firstName" label="First Name" />
            <FormField name="lastName" label="Last Name" />
          </div>
          <div className="form__row">
            <FormField name="address" label="Address" />
          </div>
          <div className="form__row">
          <FormSelect name="country" label="Country" options={CountriesList} />
          <FormField name="phone" label="Phone" />
          </div>
          <div className="checkout__confirm">
            <div className="checkout__return" type="reset">
              <ArrowBackIosIcon />
              <Link to="/shop">Return to Shop</Link>
            </div>
            <Button type="submit" className="checkout__btn btn--primary">
              CHECKOUT
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default CheckoutForm
