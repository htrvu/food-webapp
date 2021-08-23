import React from "react"
import Button from "@material-ui/core/Button"
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"

const FavoriteItem = ({ product, handleDelete }) => {
  return (
    <div className="favorite-item">
      <div className="favorite-item__image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="favorite-item__info">
        <h3 className="favorite-item__name">{product.name}</h3>
        <p className="favorite-item__desc">{product.dsc}</p>
        <span className="favorite-item__price">${product.price}</span>
      </div>
      <div className="favorite-item__delete">
        <Button
          className="favorite-item__btn"
          variant="contained"
          onClick={() => handleDelete(product.id)}
        >
          <DeleteOutlineIcon />
        </Button>
      </div>
    </div>
  )
}

export default FavoriteItem
