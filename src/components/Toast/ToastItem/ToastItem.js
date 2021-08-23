import React, { useEffect } from "react"
import { motion } from "framer-motion"

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline"
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined"

import { useToastDispatchContext } from "../../../context/ToastProvider"
import Actions from "../../../actions/Actions"

const ToastItem = ({ toast, duration = 2.5 }) => {
  const toastDispatch = useToastDispatchContext()
  const { id, type, message } = toast

  // Close toast when user click on it
  const handleClose = () => {
    toastDispatch({
      type: Actions.REMOVE,
      payload: { id },
    })
  }

  // Close toast after duration second
  useEffect(() => {
    setTimeout(() => {
      toastDispatch({
        type: Actions.REMOVE,
        payload: { id },
      })
    }, duration * 1000)
  }, [id, duration, toastDispatch])

  return (
    <motion.div
      key={id}
      onClick={handleClose}
      className={`toast-item ${type === "error" ? "toast-item--error" : ""}`}
      initial={{
        y: "100%",
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      {type === "error" ? (
        <ErrorOutlineOutlinedIcon className="toast-item__icon" />
      ) : (
        <CheckCircleOutlineIcon className="toast-item__icon" />
      )}
      <p>{message}</p>
    </motion.div>
  )
}

export default ToastItem
