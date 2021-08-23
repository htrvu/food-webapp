import React from "react"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import Fab from "@material-ui/core/Fab"

const GoUpButton = () => {
  return (
    <Fab
      className="go-up-btn"
      onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
    >
      <ExpandLessIcon className="go-up-btn__icon" />
    </Fab>
  )
}

export default GoUpButton
