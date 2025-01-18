import React, { useState } from 'react'
import classes from "../CardPageTop/CardPageTop.module.css"
import arrow from "../../assets/icons8-arrow-64.png";
import red_x from "../../assets/icons8-x-96 (1).png";
import done from "../../assets/icons8-check-50.png";
const CardPageBottom = ({cartPage, totalPage, setCartPage, tryAgain, correct, setTryAgain, setCorrect, element}) => {
  const [listOfAction, setListOfAction] = useState([]);

  const notKnow = () => {
    nextCart();
    tryAgain.push(element);
    setTryAgain(tryAgain);
    listOfAction.push(false);
    setListOfAction(listOfAction);
  }


  const Know = () =>{
    nextCart();
    correct.push(element);
    setCorrect(correct);
    listOfAction.push(true);
    setListOfAction(listOfAction);
  }


  const nextCart = () =>{
    setCartPage(cartPage + 1);
  }



  const prevCart = () =>{
    if(listOfAction[listOfAction.length - 1]){
      correct.pop()
      setCorrect(correct);
    }else{
      tryAgain.pop()
      setTryAgain(tryAgain);
    }
    listOfAction.pop();
    setListOfAction(listOfAction);
    setCartPage(cartPage - 1);
  }


  return (
    <div className={classes.cardsPage_bottom}>
          <div className={classes.cardsPage_space}></div>
          <div className={classes.buttons}>
            <button className={cartPage === (totalPage)?classes.notActive:""} onClick={() => notKnow()}>
              <img src={red_x} alt="" />
            </button>
            <button className={cartPage === (totalPage)?classes.notActive:""} onClick={() => Know()}>
              <img src={done} alt="" />
            </button>
          </div>
          <div className={`${classes.cardsPage_space} ${classes.reverse_space}`}>
            <div className={`${classes.prev} ${cartPage === 0?classes.notActive:""}`} onClick={() => prevCart()}>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
  )
}

export default CardPageBottom