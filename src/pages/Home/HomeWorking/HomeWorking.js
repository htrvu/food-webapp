import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

import WorkingStep from "./WorkingStep"
import { WorkingData, Arrow } from "../../../data/Home/WorkingData"

import { parentVariants, leftInVariants, rightInVariants, bottomUpVariants } from "../Animation/AnimateVariants"

const HomeWorking = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <motion.div
      id="home-working"
      ref={ref}
      className="home-section"
      variants={parentVariants}
      initial="hide"
      animate={inView ? "visible" : ""}
    >
      <Container>
        <div className="home-section__heading__wrapper">
          <motion.p
            variants={leftInVariants}
            className="home-section__sub-heading"
          >
            Order now!
          </motion.p>
          <motion.p
            variants={rightInVariants}
            className="home-section__heading"
          >
            How it works?
          </motion.p>
        </div>

        <Grid container className="home-working__steps" spacing={3}>
          {WorkingData.map((step, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              component={motion.div}
              variants={bottomUpVariants}
              key={step.id}
            >
              <WorkingStep
                stepInfo={step}
                arrow={index < Arrow.length ? Arrow[index] : null}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  )
}

export default HomeWorking
