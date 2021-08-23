import React from "react"
import { useHistory } from "react-router-dom"
import { motion } from "framer-motion"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

import LocationOnIcon from "@material-ui/icons/LocationOn"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined"
import StarIcon from "@material-ui/icons/Star"

import { useCartDispatchContext } from "../../context/CartProvider"
import { useFavoriteDispatchContext } from "../../context/FavoriteProvider"
import { useToastDispatchContext } from "../../context/ToastProvider"
import Actions from "../../actions/Actions"

const ProductCard = ({ category, product, scrollPosition }) => {
  console.log("rerender product cart")
  const history = useHistory()

  const cartDispatch = useCartDispatchContext()
  const favoriteDispatch = useFavoriteDispatchContext()
  const toastDispatch = useToastDispatchContext()

  const showToast = (type) => {
    toastDispatch({
      type: Actions.ADD,
      payload: {
        type: type,
        message: `This product has been added to your ${type === 'cart' ? 'cart' : 'favorite list'}`
      }
    })
  }

  const handleClick = () => {
    window.scroll({
      top: 250,
      behavior: "smooth",
    })
    history.push(`/shop/${category}/${product.id}`)
  }

  const addToCart = (e, product) => {
    e.stopPropagation()

    cartDispatch({
      type: Actions.ADD,
      payload: {
        product,
      },
    })
    showToast('cart')
  }

  const addToFavorite = (e, product) => {
    e.stopPropagation()

    favoriteDispatch({
      type: Actions.ADD,
      payload: { product },
    })
    showToast("favorite")
  }


  return (
    <div onClick={handleClick} className="product-card__wrapper">
      <div className="product-card__thumb">
        <LazyLoadImage
          scrollPosition={scrollPosition}
          className="product-card__image"
          src={product.img}
          alt={product.name}
          threshold={50}
          effect="blur"
        />

        <div className="product-card__rate">
          <StarIcon />
          <span>{product.rate}</span>
        </div>
      </div>

      <div className="product-card__trend">Favorite</div>

      <motion.div className="product-card__option">
        <span className="product-card__favorite" onClick={(e) => addToFavorite(e, product)}>
          <FavoriteBorderIcon />
        </span>
        <span className="product-card__cart" onClick={(e) => addToCart(e, product)}>
          <AddShoppingCartOutlinedIcon />
        </span>
      </motion.div>

      <div className="product-card__info">
        <h2 className="product-card__name">{product.name}</h2>
        <p className="product-card__desc">{product.dsc}</p>
        <div className="product-card__footer">
          <div className="product-card__address">
            <LocationOnIcon />
            <span>{product.country}</span>
          </div>
          <span className="product-card__price">${product.price}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
