import React, { useState, useRef, useEffect } from "react"

import Description from './Description/Description'
import Review from './Review/Review'

const tabs = ["desc", "review"]

const ProductAbout = ({ category }) => {
  const [currentTab, setCurerntTab] = useState(0)
  const tabRef = useRef()

  // Move the tab box to right position when window resize
  useEffect(() => {
    const handleResize = () => {
      const firstTab = document.querySelector('.product-about__btn.current')
      tabRef.current.style.left = `${firstTab.offsetLeft}px`
      tabRef.current.style.width = `${firstTab.offsetWidth}px`
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleChangeTab = (e) => {
    for (let i = 0; i < tabs.length; i++) {
      if (e.target.textContent.toLowerCase().includes(tabs[i])) {
        setCurerntTab(i)
        break
      }
    }
    tabRef.current.style.left = `${e.target.offsetLeft}px`
    tabRef.current.style.width = `${e.target.offsetWidth}px`
  }


  return (
    <div className="product-about__wrapper">
      <div className="product-about__buttons">
        <div onClick={handleChangeTab} className={`product-about__btn ${currentTab === 0 ? 'current' : ''}`}>
          Description
        </div>
        <div onClick={handleChangeTab} className={`product-about__btn ${currentTab === 1 ? 'current' : ''}`}>
          Review(0)
        </div>
        <div ref={tabRef} className="product-about__swipe-btn" />
      </div>

      {currentTab === 0 ? (
        <Description category={category} />
      ) : (
        // Actually, this will need an id of product to show the reviews
        <Review />
      )}
    </div>
  )
}

export default ProductAbout
