import React, { useState, useEffect } from "react"
import useDeepCompareEffect from 'use-deep-compare-effect'
import { motion } from "framer-motion"
import { useHistory } from "react-router-dom"
import ReactPaginate from "react-paginate"

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"

import { useApiContext } from "../../../../context/ApiProvider"
import { useShopFilterContext } from "../../../../context/ShopFilterProvider"
import { useShopProductsContext } from "../../../../context/ShopProductsProvider"

import ShopApi from "../../../../api/ShopApi"

import {
  getQueryObjectFromString,
  getQueryObjectFromState,
} from "../../../../utils/QueryObject"

const ShopPagination = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const history = useHistory()

  const { getProducts, isLoading } = useApiContext()
  const { shopFilterState } = useShopFilterContext()
  const { shopProducts } = useShopProductsContext()


  // Get the number of page when the shopFilterState actualy changes
  useDeepCompareEffect(() => {
    let isUnmounted = false
    const getNumberOfPage = async () => {
      const params = getQueryObjectFromState(shopFilterState)
      const response = await ShopApi.getAll(shopFilterState.category, params)
      if (!isUnmounted) setTotalPage(Math.ceil(response.data.length / 24))
    }
    getNumberOfPage()

    return () => {
      isUnmounted = true
    }
  }, [shopFilterState])

  // Update current page
  useEffect(() => {
    const params = history.location.search
    if (params !== "") {
      const queryObject = getQueryObjectFromString(params)
      if (!queryObject["_page"]) {
        setCurrentPage(1)
      } else {
        setCurrentPage(Number.parseInt(queryObject["_page"]))
      }
    }
  }, [history.location.search])

  const handleChange = ({ selected }) => {
    window.scroll({
      top: 250,
      behavior: 'smooth'
    })
    const params = getQueryObjectFromState(shopFilterState)
    getProducts(shopFilterState.category, {
      ...params,
      _page: selected + 1,
    })
  }

  return (
    !isLoading && shopProducts.length > 0 && (
      <motion.div
        className="shop-pagination__wrapper"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
          },
        }}
      >
        <ReactPaginate
          previousLabel={<NavigateBeforeIcon />}
          nextLabel={<NavigateNextIcon />}
          pageCount={totalPage}
          forcePage={currentPage - 1}
          pageRangeDisplayed={2}
          onPageChange={handleChange}
          marginPagesDisplayed={1}
          containerClassName={"shop-pagination"}
        />
      </motion.div>
    )
  )
}

export default ShopPagination
