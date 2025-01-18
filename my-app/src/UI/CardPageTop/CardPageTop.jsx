import React from 'react'
import { useNavigate } from 'react-router-dom';
import x from "../../assets/icons8-x-96.png"
import classes from "./CardPageTop.module.css";
import ProgressLine from '../progressLine/ProgressLine';
import Selection from '../Selection/Selection';
const CardPageTop = ({cartPage, totalPage}) => {
    const router = useNavigate();
  return (
    <div className={classes.cardTop}>
<div className={classes.cardsPage_top}>
        <Selection/>
        <div className={classes.cardsPage_info}>
          <div className={classes.counter}>
              {cartPage >= totalPage? totalPage: cartPage} / {totalPage}
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
      <ProgressLine percent={(cartPage)/totalPage * 100}/>
    </div>
    
  )
}

export default CardPageTop