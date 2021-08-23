import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Counter from "../../../components/CountUp"
import AnalysisData from "../../../data/Home/AnalysisData"

const AnalysisNumber = ({ isStart }) => {
  const duration = 3

  return (
    <div className="home-analysis__content__wrapper">
      <Container>
        <Grid container>
          {AnalysisData.map((data, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <div className="home-analysis__content">
                <p className="home-analysis__number">
                  <Counter
                    isStart={isStart}
                    from={0}
                    to={data.number}
                    duration={duration}
                  />
                  {data.more}
                </p>
                <p className="home-analysis__product">{data.title}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default AnalysisNumber
