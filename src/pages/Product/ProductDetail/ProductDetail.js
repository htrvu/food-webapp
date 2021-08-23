import React from "react"

import Grid from "@material-ui/core/Grid"

import ProductInfo from './ProductInfo/ProductInfo'
import ProductThumb from './ProductThumb/ProductThumb'

const ProductDetail = ({ category, product }) => {

  return (
    <div className="product-detail__wrapper">
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <ProductThumb product={product} />
        </Grid>

        <Grid item xs={12} md={6}>
          <ProductInfo category={category} product={product} />
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductDetail
