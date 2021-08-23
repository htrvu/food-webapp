import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { createTheme, ThemeProvider } from "@material-ui/core"
import { StylesProvider } from "@material-ui/core/styles"

import "../node_modules/slick-carousel/slick/slick.scss"
import "../node_modules/slick-carousel/slick/slick-theme.scss"

import App from "./App"
import AppProvider from "./context/AppProvider"

import Colors from './constant/Colors'
import "./scss/index.scss"

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.PRIMARY,
      light: Colors.PRIMARY_LIGHT,
      dark: Colors.PRIMARY_DARK
    },
    secondary: {
      main: Colors.SECONDARY,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Router>
          <AppProvider>
            <App />
          </AppProvider>
        </Router>
      </StylesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
