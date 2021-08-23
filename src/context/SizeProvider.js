import React, { useState, useContext, useEffect } from "react"

const SizeContext = React.createContext()
export const useSizeContext = () => {
  return useContext(SizeContext)
}

const SizeProvider = ({ children }) => {
  const [phoneSize, setPhoneSize] = useState(false)

  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth < 600) {
        setPhoneSize(true)
      } else setPhoneSize(false)
    }

    window.addEventListener("load", checkSize)
    window.addEventListener("resize", checkSize)

    return () => {
      window.removeEventListener("load", checkSize)
      window.removeEventListener("resize", checkSize)
    }
  }, [])

  return <SizeContext.Provider value={phoneSize}>{children}</SizeContext.Provider>
}

export default SizeProvider
