import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import CircularProgress from "@material-ui/core/CircularProgress"

const CheckoutLoading = () => {
  return (
    <AnimatePresence>
      <motion.div
        key="checkout-loading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: {
          duration: 0.3
        } }}
        exit={{ opacity: 0 }}
        className="checkout-loading"
      >
        <CircularProgress color="primary" size={50} thickness={4} />
      </motion.div>
    </AnimatePresence>
  )
}

export default CheckoutLoading
