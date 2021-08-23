import React, { Suspense, useEffect } from "react"
import { useLocation } from "react-router-dom"

import CssBaseline from "@material-ui/core/CssBaseline"

import Routes from "./routes/Routes"
import LoadingPage from "./components/LoadingPage/LoadingPage"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import GoUpButton from "./components/GoUpButton/GoUpButton"
import Cart from "./components/Cart/Cart"
import Favorite from "./components/Favorite/Favorite"
import Toast from './components/Toast/Toast'

import { useNavbarDispatchContext } from "./context/NavbarProvider"
import { useShopSidebarDispatchContext } from "./context/ShopSidebarProvider"
import { useCartDispatchContext } from "./context/CartProvider"
import { useFavoriteDispatchContext } from "./context/FavoriteProvider"
import Actions from "./actions/Actions"

function App() {
  const location = useLocation()
  const navbarDispatch = useNavbarDispatchContext()
  const shopSidebarDispatch = useShopSidebarDispatchContext()
  const cartDispatch = useCartDispatchContext()
  const favoriteDispatch = useFavoriteDispatchContext()

  // Close NavbarMobile, Cart, Favorite when the URL change
  useEffect(() => {
    navbarDispatch({
      type: Actions.HIDE,
    })
    cartDispatch({
      type: Actions.HIDE,
    })
    favoriteDispatch({
      type: Actions.HIDE,
    })
    shopSidebarDispatch({
      type: Actions.HIDE,
    })
  }, [location, navbarDispatch, cartDispatch, favoriteDispatch, shopSidebarDispatch])

  return (
    <>
      <CssBaseline />
      <Suspense fallback={<LoadingPage />}>
        <div className="App">
          <Navbar />
          <Routes />
          <Footer />
        </div>
        <GoUpButton />
      </Suspense>
      <Cart />
      <Favorite />
      <Toast />
    </>
  )
}

export default App
