import React from "react"

const WorkingStep = ({ stepInfo, arrow }) => {
  return (
    <div className="working__step__wrapper">
      <div className="working__step__thumb">
        <img src={stepInfo.image} alt={`step_${stepInfo.id}`} />
        <span>STEP 0{stepInfo.id}</span>
        {arrow && (
          <div
            className="working__step__arrow"
            style={{
              backgroundImage: `url(${arrow})`,
            }}
          />
        )}
      </div>
      <p className="working__step__content">{stepInfo.title}</p>
    </div>
  )
}

export default WorkingStep
