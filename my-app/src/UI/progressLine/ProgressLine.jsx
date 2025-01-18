import React from 'react'
import classes from "./progressLine.module.css"
const ProgressLine = ({percent}) => {
  return (
    <div>
        <div className={classes.fullLine}>
            <div className={classes.progressLine} style={{ width: `${percent>=100?100:percent}%` }}></div>
        </div>
    </div>
  )
}

export default ProgressLine