import React, { useState, useEffect } from 'react'
import ShopApi from '../../../api/ShopApi'
import ProductCard from '../../../components/ProductCard/ProductCard'

const ProductRelated = ({category, product}) => {
  const [relatedProduct, setRelatedProduct] = useState([])

  const formatCategory = category.split("-").reduce((res, word, index) => {
    if (index) res += " "
    res = res + word[0].toUpperCase() + word.slice(1)
    return res
  }, "")

  useEffect(() => {
    if (!category || !product) return
    console.log(category)

    const getRelatedProduct = async () => {
      const response = await ShopApi.getAll(category)
      const allRelated = await response.data

      const chooseRandom = []
      const indexStore = {}
      for (let i = 0; i < 5; i++) {
        let index = -1
        do {
          index = Math.floor(Math.random() * allRelated.length)
        } while (indexStore[index] !== undefined)
        indexStore[index] = index
        chooseRandom.push(allRelated[index])
      }
  
      setRelatedProduct(chooseRandom)
    }

    getRelatedProduct()
  }, [product, category])

  return (
    <div className="product-related__wrapper">
      <p className="product-related__category">{formatCategory}</p>
      <h1 className="product-related__title">Related Product</h1>
      <div className="product-related__list">
        {relatedProduct.map(product => (
          <ProductCard product={product} category={category} key={`related-${product.id}`} />
        ))}
        
      </div>
    </div>
  )
}

export default ProductRelated
