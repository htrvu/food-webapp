import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { trackWindowScroll } from "react-lazy-load-image-component"

import CircularProgress from "@material-ui/core/CircularProgress"

import ProductCard from "../../../../components/ProductCard/ProductCard"

import { useApiContext } from "../../../../context/ApiProvider"
import { useShopProductsContext } from "../../../../context/ShopProductsProvider"

const ShopProduct = ({ category, layoutList, scrollPosition }) => {
  const { isLoading } = useApiContext()
  const { shopProducts } = useShopProductsContext()

  return (
    <AnimatePresence exitBeforeEnter>
      {isLoading ? (
        <motion.div
          key="shop-loading"
          initial={false}
          exit={{ opacity: 0 }}
          className="loading-spinner"
        >
          <CircularProgress color="primary" size={50} thickness={5} />
        </motion.div>
      ) : shopProducts.length > 0 ? (
        <div
          id="shop-product"
          className={`shop-product__wrapper ${layoutList && "layout--list"}`}
        >
          {shopProducts.map((product) => (
            <ProductCard
              key={product.id}
              scrollPosition={scrollPosition}
              category={category}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="shop-product__empty">
          <img
            src="/svgs/Shop/empty-shop.svg"
            className="shop-product__empty-image"
            alt="empty-shop"
          />
          <p>There Is No Product You Are Looking For 🕵️</p>
        </div>
      )}
    </AnimatePresence>
  )
}

export default trackWindowScroll(ShopProduct)
