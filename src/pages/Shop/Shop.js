import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import Banner from "../../components/Banner/Banner"

import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

import Sidebar from "./Sidebar/Sidebar"
import ShopContent from "./ShopContent/ShopContent"

import { useApiContext } from "../../context/ApiProvider"
import { useShopFilterContext } from "../../context/ShopFilterProvider"
import { ShopActions } from '../../actions/ShopActions'

import { getQueryObjectFromString, getStateFromQueryObject } from "../../utils/QueryObject"

const Shop = ({ match }) => {
  const { category } = match.params
  const history = useHistory()
  
  const { getProducts } = useApiContext()
  const { shopFilterDispatch } = useShopFilterContext()

  // When shop page unmounted, clear the filter state
  useEffect(() => {
    return () => {
      shopFilterDispatch({
        type: ShopActions.CLEAR,
        payload: {}
      })
    }
  }, [shopFilterDispatch])

  // Handle when shop page is mounted
  // with the query string only has category
  useEffect(() => {
    const params = history.location.search
    if (params === '') {
      getProducts(category, {}, false)
      shopFilterDispatch({
        type: ShopActions.CATEGORY,
        payload: { category }
      })
    }
  }, [getProducts, category, shopFilterDispatch, history.location.search])

  // Handle event with page: refresh, go back, go forward
  // with the query string has more infomation
  useEffect(() => {
    const handlePageEvent = () => {
      const params = history.location.search
      if (params !== '') {
        const queryObject = getQueryObjectFromString(params)
        const newFilterState = getStateFromQueryObject({...queryObject, category: category})
        
        shopFilterDispatch({
          type: ShopActions.LOAD,
          payload: {
            ...newFilterState
          }
        })

        getProducts(category, queryObject, false)
      }
    }
    window.addEventListener("load", handlePageEvent)
    window.addEventListener("popstate", handlePageEvent)
    return () => {
      window.removeEventListener("load", handlePageEvent)
      window.removeEventListener("popstate", handlePageEvent)
    }
  }, [category, getProducts, history, shopFilterDispatch])

  return (
    <div id="shop">
      <Banner>
        <p>Let's Buy Everything!</p>
      </Banner>

      <div className="shop__wrapper">
        <Container>
          <Grid container>
            <Grid item md={2} className="shop__sidebar__wrapper">
              <Sidebar />
            </Grid>

            <Grid item xs={12} md={10} className="shop__content__wrapper">
              <ShopContent category={category} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Shop
