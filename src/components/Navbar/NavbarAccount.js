import React, { useState } from "react"
import Avatar from "@material-ui/core/Avatar"
import { motion, AnimatePresence } from "framer-motion"

import PersonIcon from "@material-ui/icons/Person"
import LoyaltyIcon from "@material-ui/icons/Loyalty"
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"

import { useFavoriteDispatchContext } from "../../context/FavoriteProvider"
import Actions from "../../actions/Actions"

const user = {
  firstName: "Hoang Trong",
  lastName: "Vu",
}

const NavbarAccount = ({ navPC }) => {
  const favoriteDispatch = useFavoriteDispatchContext()

  const toggleFavorite = () => {
    favoriteDispatch({
      type: Actions.TOGGLE,
      payload: {},
    })
  }

  const [showOption, setShowOption] = useState(false)

  const optionVariants = {
    hide: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  }

  return (
    <div
      className="navbar__account"
      onMouseEnter={() => setShowOption(true)}
      onMouseLeave={() => setShowOption(false)}
    >
      <Avatar
        className="user__avatar"
        src="https://lh3.googleusercontent.com/a/AATXAJyKTxFmSD2R-mdOZTp3RC-CAd1GzY9tvZpoOVCm=s96-c"
      >
        <PersonIcon />
      </Avatar>
      <p className="user__name">
        <span className="user__name--first">{user.firstName}</span>{" "}
        <span>{user.lastName}</span>
      </p>

      <AnimatePresence>
        {showOption && navPC && (
          <motion.div
            variants={optionVariants}
            initial="hide"
            animate="visible"
            exit="hide"
            className="account__option"
          >
            <div className="account__option-item">
              <PermContactCalendarIcon />
              My Account
            </div>
            <div className="account__option-item" onClick={toggleFavorite}>
              <LoyaltyIcon />
              My Favorites
            </div>
            <div className="account__option-item">
              <ExitToAppIcon />
              Log Out
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NavbarAccount
