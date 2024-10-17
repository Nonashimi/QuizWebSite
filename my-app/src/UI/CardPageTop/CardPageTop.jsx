import React from 'react'
import { useNavigate } from 'react-router-dom';
import x from "../../assets/icons8-x-96.png"
import classes from "./CardPageTop.module.css";
const CardPageTop = () => {
    const router = useNavigate();

  return (
    <div className={classes.cardsPage_top}>
        <select name="" id="" className={classes.cardsPage_space}>
          <option value="">cards</option>
          <option value="">quizz</option>
        </select>
        <div className={classes.cardsPage_info}>
          <div className={classes.counter}>
              1/3
          </div>
          <div className={classes.cardPage_title}>
            The Great Gatsby
          </div>
        </div>
        <div className={`${classes.cardsPage_space} ${classes.reverse_space}`} >
          <div className={classes.left} onClick={() => router(-1)}>
            <img src={x} alt="" />
          </div>
        </div>
      </div>
  )
}

export default CardPageTop