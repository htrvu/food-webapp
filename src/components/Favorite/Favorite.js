import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import FavoriteList from './FavoriteList/FavoriteList'

import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import LoyaltyIcon from "@material-ui/icons/Loyalty"

import { useFavoriteContext } from "../../context/FavoriteProvider"
import Actions from "../../actions/Actions"

const Favorite = () => {
  const { favoriteState, favoriteDispatch } = useFavoriteContext()

  const toggleFavorite = () => {
    favoriteDispatch({
      type: Actions.TOGGLE,
      payload: {},
    })
  }
  
  const favoriteVariants = {
    hide: {
      x: '100%',
      scale: 0.5,
      opacity: 0.5,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    },
    visible: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  }

  return (
    <AnimatePresence>
      {favoriteState.showFavorite && (
        <motion.div className="favorite__wrapper"
          variants={favoriteVariants}
          initial="hide"
          animate="visible"
          exit="hide"
        >
          <div className="favorite__heading">
            <p>
              <LoyaltyIcon />
              Your Favorites
            </p>
            <ExitToAppIcon className="favorite__close-btn" onClick={toggleFavorite}/>
          </div>

          <FavoriteList />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Favorite
