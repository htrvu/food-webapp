import React from 'react'
import Button from '@material-ui/core/Button'

const ProductCard = ({productInfo}) => {
  return (
    <div className="home-product__card">
      <div className="home-product__card-thumb">
        <img src={productInfo.image} alt={productInfo.title} />
        <Button className="btn--primary product-cart-btn">BEST DEAL</Button>
      </div>
      <div className="home-product__card-content">
        <p className="home-product__card-title">
          {productInfo.title}
        </p>
        <p className="home-product__card-desc">
          {productInfo.description}
        </p>
        <p className="home-product__card-price">
          ${productInfo.price}
        </p>
      </div>
    </div>
  )
}

export default ProductCard
