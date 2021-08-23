import React, { useEffect } from "react"

import HomeSlider from './HomeSlider/HomeSlider'
import HomeWorking from './HomeWorking/HomeWorking'
import HomeIngredient from './HomeIngredient/HomeIngredient'
import HomeCategory from './HomeCategory/HomeCategory'
import HomeDelivery from './HomeDelivery/HomeDelivery'
import HomeProduct from './HomeProduct/HomeProduct'
import HomeAnalysis from './HomeAnalysis/HomeAnalysis'
import HomeReview from './HomeReview/HomeReview'

const Home = () => {

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className="home">
      <HomeSlider />
      <HomeWorking />
      <HomeIngredient />
      <HomeCategory />
      <HomeDelivery />
      <HomeProduct />
      <HomeAnalysis />
      <HomeReview />
    </div>
  )
}

export default Home
