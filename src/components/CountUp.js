import React, { useEffect, useRef } from 'react'
import { animate } from 'framer-motion'

const CountUp = ({ isStart, from = 0, to, duration = 3 }) => {
  const ref = useRef()

  useEffect(() => {
    if (isStart) {
      const controls = animate(from, to, {
        duration,
        onUpdate: (value) => {
          ref.current.textContent = new Intl.NumberFormat().format(Math.floor(value))
        }
      })

      return controls.stop
    }
    else {
      ref.current.textContent = 0
    }
  }, [isStart, from, to, duration])

  return <span ref={ref}></span>
}

export default CountUp
