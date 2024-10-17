import React from 'react'
import classes from "../CardPageTop/CardPageTop.module.css"
import arrow from "../../assets/icons8-arrow-64.png";
import red_x from "../../assets/icons8-x-96 (1).png";
import done from "../../assets/icons8-check-50.png";
const CardPageBottom = () => {
  return (
    <div className={classes.cardsPage_bottom}>
          <div className={classes.cardsPage_space}></div>
          <div className={classes.buttons}>
            <button>
              <img src={red_x} alt="" />
            </button>
            <button>
              <img src={done} alt="" />
            </button>
          </div>
          <div className={`${classes.cardsPage_space} ${classes.reverse_space}`}>
            <div className={classes.prev}>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
  )
}

export default CardPageBottom