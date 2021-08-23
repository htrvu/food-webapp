import React, { useEffect } from "react"
import { AnimatePresence } from "framer-motion"

import ToastItem from "./ToastItem/ToastItem"

import { useToastContext } from "../../context/ToastProvider"
import { useSizeContext } from '../../context/SizeProvider'
import Actions from "../../actions/Actions"

const Toast = ({maxToast = 1}) => {
  const { toastState, toastDispatch } = useToastContext()
  const phoneSize = useSizeContext()

  // Remove 1 toast if there is more then maxToast toast is showing
  useEffect(() => {
    if (toastState.length > maxToast) {
      setTimeout(() => {
        toastDispatch({
          type: Actions.POP
        })
      }, 200)
    }
  })

  return (
    !phoneSize && <div className="toast__wrapper">
      <AnimatePresence>
        {toastState.map((toast) => (
          <ToastItem key={toast.id} toast={toast} />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default Toast
