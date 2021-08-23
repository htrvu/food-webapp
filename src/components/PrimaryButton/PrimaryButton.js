import React from "react"
import { useHistory } from "react-router-dom"
import Button from "@material-ui/core/Button"

const PrimaryButton = ({ toPage, startIcon, children, scroll = true }) => {
  const history = useHistory()

  const handleClick = () => {
    if (scroll) window.scrollTo(0, 0)
    switch (toPage) {
      case "Home":
        history.push("/")
        break
      case "Shop":
        history.push("/shop/best-foods")
        break
      default:
        break
    }
  }

  return (
    <Button
      className="btn--primary"
      variant="contained"
      startIcon={startIcon}
      onClick={handleClick}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
