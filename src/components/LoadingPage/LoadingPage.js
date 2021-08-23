import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const LoadingPage = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="loading-page"
        key="loading-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Loading ... 🍔🍔🍔
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingPage
