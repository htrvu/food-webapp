import React, { useState, useEffect } from "react"

import Container from "@material-ui/core/Container"

import Banner from "../../components/Banner/Banner"
import ProductDetail from "./ProductDetail/ProductDetail"
import ProductAbout from "./ProductAbout/ProductAbout"
import ProductRelated from "./ProductRelated/ProductRelated"

import ShopApi from "../../api/ShopApi"

const Product = ({ match }) => {
  const { category, id } = match.params
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const getProduct = async () => {
      const response = await ShopApi.get(category, id)
      setProduct(response.data)
    }
    getProduct()
  }, [id, category])

  return (
    <>
      <Banner>
        <p>Enjoy It!</p>
      </Banner>
      <Container className="product__wrapper">
        <ProductDetail category={category} product={product} />

        <ProductAbout category={category} product={product} />

        <ProductRelated category={category} product={product} />
      </Container>
    </>
  )
}

export default Product
