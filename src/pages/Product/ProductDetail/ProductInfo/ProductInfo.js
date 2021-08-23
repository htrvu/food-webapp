import React, { useState, useEffect } from "react"
import ContentLoader from "react-content-loader"

import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"
import ButtonBase from "@material-ui/core/ButtonBase"
import Button from "@material-ui/core/Button"

import RemoveIcon from "@material-ui/icons/Remove"
import AddIcon from "@material-ui/icons/Add"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined"
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined"
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined"

import RateStar from "../../../../components/RateStar/RateStar"

import { useCartDispatchContext } from "../../../../context/CartProvider"
import { useFavoriteDispatchContext } from "../../../../context/FavoriteProvider"
import { useToastDispatchContext } from "../../../../context/ToastProvider"
import Actions from "../../../../actions/Actions"

import { DiscountData } from "../../../../data/Product/DiscountData"
import { calculatePrice } from "../../../../utils/CalculatePrice"

const ProductInfo = ({ product, category }) => {
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [choice, setChoice] = useState(0)
  const [price, setPrice] = useState(0)

  const cartDispatch = useCartDispatchContext()
  const favoriteDispatch = useFavoriteDispatchContext()
  const toastDispatch = useToastDispatchContext()

  const showToast = (type) => {
    toastDispatch({
      type: Actions.ADD,
      payload: {
        type: type,
        message: `This product has been added to your ${type === 'cart' ? 'cart' : 'favorite list'}`
      },
    })
  }

  useEffect(() => {
    if (product) {
      setTotal(product.price)
      setPrice(product.price)
    }
  }, [product])

  const addToCart = (product, quantity) => {
    cartDispatch({
      type: Actions.ADD,
      payload: { product, quantity }
    })
    showToast("cart")
  }

  const addToFavorite = (product) => {
    favoriteDispatch({
      type: Actions.ADD,
      payload: { product }
    })
    showToast("favorite")
  }

  const changeQuantity = (changeValue) => {
    let newQuantity = quantity
    if (changeValue === 1) {
      if (quantity === 99) return
      newQuantity += 1
    } else {
      if (quantity === 0) return
      newQuantity -= 1
    }

    let calculateResult = calculatePrice(newQuantity, price)
    const newTotal = calculateResult.total
    const newChoice = calculateResult.quantityPivot

    setQuantity(newQuantity)
    setChoice(newChoice)
    setTotal(newTotal)
  }

  const changeDiscount = (e) => {
    const newQuantity = Number.parseInt(e.target.value)

    let calculateResult = calculatePrice(newQuantity, price)
    const newTotal = calculateResult.total

    setChoice(newQuantity)
    setTotal(newTotal)
    setQuantity(newQuantity)
  }

  const contentLoader = () => (
    <ContentLoader>
      <rect x="0" y="0" width="100%" height="35" />
    </ContentLoader>
  )

  return (
    <div className="product-detail__info">
      <h1 className="product-detail__title">
        {product ? product.name : contentLoader()}
      </h1>
      <div className="product-detail__rate">
        <RateStar nStar={product ? product.rate : 0} />
        <p>0 Customer Reviews</p>
      </div>
      <p className="product-detail__price">${total}</p>
      <div className="product-detail__mores">
        <p className="product-detail__more">
          <span>Category: </span>
          {category}
        </p>
        <p className="product-detail__more">
          <span>Country: </span> {product && product.country}
        </p>
      </div>
      <div className="product-detail__desc">{product && product.dsc}</div>

      <h2 className="product-detail__option">Choose your option</h2>
      <RadioGroup className="product-discount" value={choice} onChange={changeDiscount}>
        {DiscountData.map(({ quantity, discount }) => (
          <FormControlLabel
            key={`discount-${quantity}`}
            className="product-discount__group"
            value={quantity}
            control={<Radio className="product-discount__radio" color="primary" />}
            label={
              <p className="product-discount__content">
                Buy at least {quantity} and get {discount * 100}% off
              </p>
            }
          />
        ))}
      </RadioGroup>

      <div className="product-detail__actions">
        <div className="product-detail__quantity">
          <ButtonBase
            className="product-detail__action-btn"
            onClick={() => changeQuantity(-1)}
          >
            <RemoveIcon />
          </ButtonBase>
          <span>{quantity}</span>
          <ButtonBase
            className="product-detail__action-btn"
            onClick={() => changeQuantity(1)}
          >
            <AddIcon />
          </ButtonBase>
        </div>

        <div className="product-detail__add-cart">
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddShoppingCartIcon />}
            onClick={() => addToCart(product, quantity)}
          >
            ADD TO CART
          </Button>
        </div>

        <ButtonBase
          className="product-detail__action-btn"
          onClick={() => addToFavorite(product)}
        >
          <FavoriteBorderIcon />
        </ButtonBase>
      </div>

      <div className="product-detail__commits">
        <div className="product-detail__commit">
          <LocalShippingOutlinedIcon />
          <p>Free global shipping on all orders</p>
        </div>
        <div className="product-detail__commit">
          <EventAvailableOutlinedIcon />
          <p>2 hours easy returns if you change your mind</p>
        </div>
        <div className="product-detail__commit">
          <LocalOfferOutlinedIcon />
          <p>Order before noon for same day dispatch</p>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
