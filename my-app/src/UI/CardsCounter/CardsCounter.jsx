import React from 'react'
import classes from "./CardsCounter.module.css";
const CardsCounter = ({tr, cor}) => {
  return (
        <div className={classes.CartCounter}>
        <div className={classes.counter_not}><div className={classes.counter_number}>{tr}</div> <div className="">нужно изучить</div></div>
        <div className={classes.counter_yes}><div className="">знаю</div> <div className={classes.counter_number}>{cor}</div></div>
        </div>
  )
}

export default CardsCounter