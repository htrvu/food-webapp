import React from "react"

import FavoriteItem from "./FavoriteItem/FavoriteItem"

import { useFavoriteContext } from "../../../context/FavoriteProvider"
import Actions from "../../../actions/Actions"

const FavoriteList = () => {
  const { favoriteState, favoriteDispatch } = useFavoriteContext()
  const { favoriteList } = favoriteState

  const handleDelete = (id) => {
    favoriteDispatch({
      type: Actions.REMOVE,
      payload: { id },
    })
  }

  return (
    <div className="favorite-list">
      {favoriteList.length === 0 ? (
        <div className="empty-list">
          <img
            className="empty-list__icon"
            src="/svgs/Common/empty-cart.svg"
            alt="empty-list"
          />
          <h3 className="empty-list__text">Your favorite list is empty 🍔</h3>
        </div>
      ) : (
        favoriteList.map((product) => (
          <FavoriteItem product={product} handleDelete={handleDelete} />
        ))
      )}
    </div>
  )
}

export default FavoriteList
