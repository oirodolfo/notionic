import type { ComponentType } from 'react'
import React, { useRef, useEffect } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'

export function withFocusFadeId(Component): ComponentType {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.8 })

    useEffect(() => {
      console.log('inview', isInView)
    }, [isInView])

    return (
      <AnimatePresence exitBeforeEnter>
        <motion.div
          ref={ref}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}

          // animate={{
          //     opacity: isInView ? 1 : 0,
          //     exit:
          //
        >
          <Component {...props} />
        </motion.div>
      </AnimatePresence>
    )
  }
}
