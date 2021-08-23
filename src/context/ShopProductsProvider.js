import React, { useState, useContext } from "react"

const ShopProductsContext = React.createContext()

export const useShopProductsContext = () => {
  return useContext(ShopProductsContext)
}

const ShopProductsProvider = ({ children }) => {
  const [shopProducts, setShopProducts] = useState([])

  return (
    <ShopProductsContext.Provider value={{ shopProducts, setShopProducts }}>
      {children}
    </ShopProductsContext.Provider>
  )
}

export default ShopProductsProvider
