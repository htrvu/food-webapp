import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import FilterListIcon from "@material-ui/icons/FilterList"
import CloseIcon from "@material-ui/icons/Close"
import Sidebar from "./Sidebar"

import { useShopSidebarContext } from "../../../context/ShopSidebarProvider"
import Actions from "../../../actions/Actions"

const SidebarMobile = () => {
  const { shopSidebarState, shopSidebarDispatch } = useShopSidebarContext()
  const { showSidebarMobile } = shopSidebarState

  const handleToggle = () => {
    shopSidebarDispatch({
      type: Actions.TOGGLE,
    })
  }

  return (
    <div className="shop__sidebar-mobile__wrapper">
      <div className="sidebar-mobile__heading" onClick={handleToggle}>
        <FilterListIcon className="sidebar-mobile__icon" />
        <span>Filter</span>
      </div>

      <AnimatePresence>
        {showSidebarMobile && (
          <motion.div
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            animate={{
              x: "0",
              opacity: 1,
              transition: {
                duration: 0.3
              }
            }}
            exit={{
              x: "-100%",
              opacity: 0,
              transition: {
                duration: 0.3
              }
            }}
            className="sidebar-mobile__body"
            key="shop-sidebar-mobile"
          >
            <Sidebar />
            <CloseIcon className="sidebar-mobile__close-btn" onClick={handleToggle} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SidebarMobile
