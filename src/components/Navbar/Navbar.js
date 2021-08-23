import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Container from "@material-ui/core/Container"
import { motion } from "framer-motion"

import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage"

import NavbarPC from "./NavbarPC"
import NavbarMobile from "./NavbarMobile"

import { useNavbarDispatchContext } from "../../context/NavbarProvider"
import Actions from "../../actions/Actions"

const Navbar = () => {
  const navbarDispatch = useNavbarDispatchContext()
  
  const [animated, setAnimated] = useState(false)
  const threshold = 50

  useEffect(() => {
    const handleScroll = () => {  
      if (window.scrollY >= threshold) {
        setAnimated(true)
      } else setAnimated(false)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.div
        className="navbar"
        animate={{
          backgroundColor: animated ? "rgba(0, 0, 0, 0.84)" : "rgba(0, 0, 0, 0)",
          y: animated ? -6 : 0,
          transition: {
            duration: 0.25,
          },
        }}
      >
        <Container>
          <div className="navbar__wrapper">
            <EmojiFoodBeverageIcon
              className="navbar-mobile__icon"
              onClick={() => {
                navbarDispatch({
                  type: Actions.TOGGLE,
                })
              }}
            />
            <p className="navbar__brand">
              <Link to="/">
                <img
                  className="navbar__logo"
                  src="https://food-g-app.web.app/static/media/logo.59e734ae.svg"
                  alt="logo"
                />
              </Link>
            </p>

            <NavbarPC />
          </div>
        </Container>
      </motion.div>

      <NavbarMobile />
    </>
  )
}

export default Navbar
