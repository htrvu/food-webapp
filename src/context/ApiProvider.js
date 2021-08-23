import React, { useContext, useState, useCallback } from "react"
import { useHistory } from "react-router-dom"

import queryString from "query-string"

import { useShopProductsContext } from "./ShopProductsProvider"

import ShopApi from "../api/ShopApi"

const ApiContext = React.createContext()

export const useApiContext = () => {
  return useContext(ApiContext)
}

const ApiProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  const { setShopProducts } = useShopProductsContext()
  const history = useHistory()

  const getProducts = useCallback(
    async (category, params, push = true) => {
      setIsLoading(true)
      const response = await ShopApi.getAll(category, { ...params, _limit: 24 })
      setShopProducts(response.data)
      setIsLoading(false)

      // Push to the "actual" URL
      // This is necessary for some case like Refresh, Go back, Go forward
      if (push) {
        history.push({
        pathname: category,
        search: queryString.stringify({
          _limit: 24,
          ...params,
        }),
      })
    }
    },
    [setIsLoading, setShopProducts, history]
  )

  return (
    <ApiContext.Provider value={{ isLoading, getProducts }}>
      {children}
    </ApiContext.Provider>
  )
}

export default ApiProvider
