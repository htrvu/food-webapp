import React from "react"

import SizeProvider from "./SizeProvider"
import ApiProvider from "./ApiProvider"
import ShopProductsProvider from "./ShopProductsProvider"
import ShopFilterProvider from "./ShopFilterProvider"
import CartProvider from "./CartProvider"
import FavoriteProvider from "./FavoriteProvider"
import NavbarProvider from "./NavbarProvider"
import ToastProvider from "./ToastProvider"
import ShopSidebarProvider from "./ShopSidebarProvider"
import ReviewProvider from "./ReviewProvider"

const AppProvider = ({ children }) => {
  return (
    <SizeProvider>
      <NavbarProvider>
        <ShopFilterProvider>
          <ToastProvider>
            <ShopProductsProvider>
              <ShopSidebarProvider>
                <ApiProvider>
                  <CartProvider>
                    <FavoriteProvider>
                      <ReviewProvider>
                        {children}
                      </ReviewProvider>
                    </FavoriteProvider>
                  </CartProvider>
                </ApiProvider>
              </ShopSidebarProvider>
            </ShopProductsProvider>
          </ToastProvider>
        </ShopFilterProvider>
      </NavbarProvider>
    </SizeProvider>
  )
}

export default AppProvider
