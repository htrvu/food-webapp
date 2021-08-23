import React from "react"

import Banner from '../../components/Banner/Banner'

import PrimaryButton from "../../components/PrimaryButton/PrimaryButton"

const NotFound = () => {
  return (
    <div className="not-found__wrapper">
      <Banner>
        <p>Opps...</p>
      </Banner>

      <div className="not-found__content">
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <img src="/svgs/NotFound/404.svg" alt="404" />

        <PrimaryButton toPage="Home">Return to Home</PrimaryButton>
      </div>
    </div>
  )
}

export default NotFound
