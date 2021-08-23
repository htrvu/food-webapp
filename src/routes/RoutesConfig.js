import { lazy } from "react"
import { Redirect } from "react-router-dom"

import { PathName } from "./PathName"

const Home = lazy(() => import("../pages/Home/Home"))
const Shop = lazy(() => import("../pages/Shop/Shop"))
const NotFound = lazy(() => import("../pages/NotFound/NotFound"))
const Product = lazy(() => import("../pages/Product/Product"))
const Checkout = lazy(() => import('../pages/Checkout/Checkout'))

const RoutesConfig = [
  {
    exact: true,
    path: PathName.ROOT,
    component: () => <Redirect to={PathName.HOME} />,
  },
  {
    exact: true,
    path: PathName.HOME,
    component: Home,
  },
  {
    exact: true,
    path: PathName.SHOP,
    component: () => <Redirect to={PathName.SHOP + '/best-foods'} />,
  },
  {
    exact: true,
    path: PathName.SHOP_PRODUCT,
    component: Shop,
  },
  {
    exact: true,
    path: PathName.PRODUCT,
    component: Product,
  },
  {
    exact: true,
    path: PathName.CHECKOUT,
    component: Checkout,
  },
  {
    component: NotFound,
  },
]

export default RoutesConfig
