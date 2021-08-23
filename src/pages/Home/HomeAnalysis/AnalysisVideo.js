import React, { useState } from "react"
import IconButton from '@material-ui/core/IconButton'
import Backdrop from '@material-ui/core/Backdrop';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const AnalysisVideo = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className="home-analysis__video__wrapper">
      <div className="home-analysis__video-tag__wrapper">
        <div className="home-analysis__video-tag rounded-tag">
          <p className="home-analysis__product">Sandwich</p>
          <p className="home-analysis__price">$45</p>
        </div>
        <div className="home-analysis__video-btn__wrapper">
          <IconButton
            variant="contained"
            className="home-analysis__video-btn"
            onClick={() => setIsShow(true)}
          >
            <PlayArrowIcon className="home-analysis__video-icon" />
          </IconButton>
        </div>

        <span className="ball ball--1" />
        <div className="ball ball--2" />
        <div className="ball ball--3" />
      </div>

      <Backdrop
        className="home-analysis__overlay"
        open={isShow}
        onClick={() => setIsShow(false)}
      >
        <div className="home-analysis__video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GgQFO8dL5XQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Backdrop>
    </div>
  )
}

export default AnalysisVideo
