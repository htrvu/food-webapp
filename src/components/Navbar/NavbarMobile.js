import React from "react"
import { Link } from "react-router-dom"
import Divider from "@material-ui/core/Divider"
import { motion, AnimatePresence } from "framer-motion"

import NavbarAccount from "./NavbarAccount"

import LoyaltyIcon from "@material-ui/icons/Loyalty"
import HomeIcon from "@material-ui/icons/Home"
import LocalDiningIcon from "@material-ui/icons/LocalDining"
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined"
import StoreIcon from "@material-ui/icons/Store"
import CloseIcon from "@material-ui/icons/Close"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"

import { useFavoriteDispatchContext } from "../../context/FavoriteProvider"
import { useNavbarContext } from "../../context/NavbarProvider"
import Actions from "../../actions/Actions"


const overlayVariants = {
  hide: {
    opacity: 0
  },
  visible: {
    opacity: 1
  },
}

const navbarVariants = {
  hide: {
    x: "-100%",
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3
    },
  },
}

const NavbarMobile = () => {
  const { navbarState, navbarDispatch } = useNavbarContext()
  const showNavMobile = navbarState.showNavMobile

  const favoriteDispatch = useFavoriteDispatchContext()

  const toggleFavorite = () => {
    favoriteDispatch({
      type: Actions.TOGGLE,
      payload: {},
    })
  }

  const toggleNavMobile = () => {
    navbarDispatch({
      type: Actions.TOGGLE,
    })
  }

  return (
    <AnimatePresence>
      {showNavMobile && (
        <motion.div
          key="nav-mobile-overlay"
          className="navbar-mobile__overlay"
          variants={overlayVariants}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.3
            }
          }}
          exit={{
            opacity: 0
          }}
          onClick={toggleNavMobile}
        >
          <motion.div
            key="nav-mobile-wrapper"
            variants={navbarVariants}
            initial="hide"
            animate="visible"
            exit="hide"
            className="navbar-mobile__wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="navbar-mobile__item navbar-mobile__account">
              <NavbarAccount navPC={false} />

              <CloseIcon className="navbar-mobile__close" onClick={toggleNavMobile} />
            </div>

            <Divider className="navbar-mobile__divider" />

            <div className="navbar-mobile__list">
              <Link to="/" className="navbar-mobile__item navbar__item--link">
                <HomeIcon className="navbar__icon" />
                Home
              </Link>
              <Link to="/shop" className="navbar-mobile__item navbar__item--link">
                <LocalDiningIcon className="navbar__icon" />
                Order online
              </Link>
              <Link to="/news" className="navbar-mobile__item navbar__item--link">
                <LibraryBooksOutlinedIcon className="navbar__icon" />
                News
              </Link>
              <Link to="/location" className="navbar-mobile__item navbar__item--link">
                <StoreIcon className="navbar__icon" />
                Store locations
              </Link>
            </div>

            <Divider className="navbar-mobile__divider" />

            <div
              className="navbar-mobile__item navbar__item--link navbar-mobile__favorites"
              onClick={toggleFavorite}
            >
              <LoyaltyIcon className="navbar__icon" />
              Your favorites
            </div>

            <Divider className="navbar-mobile__divider" />

            <div className="navbar-mobile__item navbar__item--link navbar-mobile__logout">
              <ExitToAppIcon className="navbar__icon" />
              <span>Log Out</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default NavbarMobile
