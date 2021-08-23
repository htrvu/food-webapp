import React, { useState, useEffect } from "react"

import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

import Banner from "../../components/Banner/Banner"
import CheckoutInfo from "./CheckoutInfo/CheckoutInfo"
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary"
import CheckoutComplete from "./CheckoutComplete/CheckoutComplete"
import CheckoutLoading from "./CheckoutLoading/CheckoutLoading"

const Checkout = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    setIsSubmitting(false)
    setIsCompleted(false)
  }, [])

  return (
    <>
      <Banner>Checkout!</Banner>
      {isSubmitting && <CheckoutLoading />}
      {isCompleted ? (
        <CheckoutComplete />
      ) : (
        <>
          <div className="checkout-wrapper">
            <Container>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <CheckoutInfo
                    isSubmitting={isSubmitting}
                    setIsSubmitting={setIsSubmitting}
                    setIsCompleted={setIsCompleted}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CheckoutSummary />
                </Grid>
              </Grid>
            </Container>
          </div>
        </>
      )}
    </>
  )
}

export default Checkout
