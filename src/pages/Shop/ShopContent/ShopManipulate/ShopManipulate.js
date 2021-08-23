import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

import SearchIcon from "@material-ui/icons/Search"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import ViewListIcon from "@material-ui/icons/ViewList"
import ViewComfyIcon from "@material-ui/icons/ViewComfy"

import SidebarMobile from "../../Sidebar/SidebarMobile"

import { SortMode } from "../../../../data/Shop/ManipulateData"

import { useShopFilterContext } from "../../../../context/ShopFilterProvider"
import { useSizeContext } from '../../../../context/SizeProvider'
import { useApiContext } from "../../../../context/ApiProvider"
import { ShopActions } from "../../../../actions/ShopActions"

import { getQueryObjectFromState } from "../../../../utils/QueryObject"


const sortOptionVariants = {
  hide: {
    opacity: 0,
    y: 15,
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
}

const sortDataMap = {}
for (let sortMode of SortMode) {
  sortDataMap[sortMode.mode] = sortMode.title
}

const ShopManipulate = ({ layoutList, changeLayout }) => {
  const { shopFilterState, shopFilterDispatch } = useShopFilterContext()
  const { getProducts } = useApiContext()
  const phoneSize = useSizeContext()
  
  const [showSortOption, setShowSortOption] = useState(false)
  const inputRef = useRef(null)
  
  const handleSearch = (searchString) => {
    if (searchString === '' || searchString === shopFilterState.searchString) return;

    shopFilterDispatch({
      type: ShopActions.SEARCH,
      payload: { searchString },
    })
    const params = getQueryObjectFromState({
      ...shopFilterState,
      searchString: searchString
    })
    getProducts('our-foods', params)
  }

  const handleSort = (sortMode) => {
    setShowSortOption(!showSortOption)

    if (sortMode === shopFilterState.sortMode) return;

    shopFilterDispatch({
      type: ShopActions.SORT,
      payload: { sortMode },
    })
    const params = getQueryObjectFromState({
      ...shopFilterState,
      sortMode: sortMode
    })
    getProducts(shopFilterState.category, params)
  }

  useEffect(() => {
    const handle = (e) => {
      if (!showSortOption) return
      if (!e.target.parentElement.classList.contains("manipulate-sort__wrapper")) {
        setShowSortOption(!showSortOption)
      }
    }
    window.addEventListener("click", handle)
    return () => window.removeEventListener("click", handle)
  }, [showSortOption])

  return (
    <div className="shop-manipulate__wrapper">
      <div id="manipulate-search">
        <input
          ref={inputRef}
          className="shop-manipulate__search-input"
          placeholder={phoneSize ? "Search..." : 'Search your favorite food...'}
        />
        <SearchIcon className="shop-manipulate__search-icon" onClick={() => handleSearch(inputRef.current.value)} />
      </div>

      <div id="manipulate-sort">
        <div className="manipulate-sort__wrapper">
          <div
            className="manipulate-sort__current"
            onClick={() => setShowSortOption(!showSortOption)}
          >
            <p>{sortDataMap[shopFilterState.sortMode]}</p>
            <ArrowDropDownIcon className="manipulate-sort__icon" />
          </div>
          <AnimatePresence>
            {showSortOption && (
              <motion.ul
                className="manipulate-sort__options"
                variants={sortOptionVariants}
                initial="hide"
                animate="visible"
                exit="hide"
              >
                {SortMode.map((item, index) => (
                  <li
                    key={index}
                    className="manipulate-sort__option"
                    value={item.mode}
                    onClick={() => handleSort(item.mode)}
                  >
                    {item.title}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div id="manipulate-layout">
        <div className="manipulate-layout__wrapper">
          <ViewComfyIcon
            className={`manipulate-layout__icon ${
              !layoutList && "active"
            }`}
            onClick={changeLayout}
          />
          <ViewListIcon
            className={`manipulate-layout__icon ${
              layoutList && "active"
            }`}
            onClick={changeLayout}
          />
        </div>
      </div>
      
      <SidebarMobile />
    </div>
  )
}

export default ShopManipulate
