import React from 'react'
import classes from "./ProgressCircle.module.css"
import check from "../../assets/icons8-check-50.png";
const ProgressCircle = ({tr, cor}) => {
    const percent =  Math.ceil(cor/(tr + cor) * 100);

  return (
<div className={classes.progress_circle} style={{ background: `conic-gradient(rgb(91, 202, 143) ${percent}%, #e0e0e0 0)` }}>ы
  {percent == 100 ?
  <span>  <img src={check} alt="" />
</span>
    :
    <span>
        {percent}%
    </span>
  }
  
</div>
  )
}

export default ProgressCircle