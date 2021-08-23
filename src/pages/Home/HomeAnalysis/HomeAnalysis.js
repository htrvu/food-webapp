import React, { useState, useEffect } from "react"
import AnalysisVideo from "./AnalysisVideo"
import AnalysisNumber from "./AnalysisNumber"
import { useInView } from 'react-intersection-observer'

const HomeAnalysis = () => {
  const [isStart, setIsStart] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      setIsStart(true)
    }
  }, [inView])
  
  return (
    <div
      ref={ref}
      id="home-analysis"
      className="home-section"
      style={{
        backgroundImage: "url('./images/Home/Analysis/analysis-thumb.jpg')",
      }}
    >
      <AnalysisVideo />
      <AnalysisNumber isStart={isStart} />
    </div>
  )
}

export default HomeAnalysis
