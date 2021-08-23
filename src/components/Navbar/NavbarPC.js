import React from "react"
import { Link } from "react-router-dom"
import CartShortcut from "../Cart/CartShortcut"
import NavbarAccount from "./NavbarAccount"

import HomeIcon from "@material-ui/icons/Home"
import LocalDiningIcon from "@material-ui/icons/LocalDining"
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined"
import StoreIcon from "@material-ui/icons/Store"

const NavbarPC = () => {
  return (
    <>
      <div className="navbar__list navbar__list--left">
        <Link to='/' className="navbar__item navbar__item--link">
          <HomeIcon className="navbar__icon" />
          Home
        </Link>
        <Link to='/shop' className="navbar__item navbar__item--link">
          <LocalDiningIcon className="navbar__icon" />
          Order online
        </Link>
        <Link to='/news' className="navbar__item navbar__item--link">
          <LibraryBooksOutlinedIcon className="navbar__icon" />
          News
        </Link>
        <Link to='/location' className="navbar__item navbar__item--link">
          <StoreIcon className="navbar__icon" />
          Store locations
        </Link>
      </div>
      <div className="navbar__list navbar__list--right">
        <div className="navbar__item">
          <CartShortcut />
        </div>
        <div className="navbar__item navbar-pc__account">
          <NavbarAccount navPC={true} />
        </div>
      </div>
    </>
  )
}

export default NavbarPC
