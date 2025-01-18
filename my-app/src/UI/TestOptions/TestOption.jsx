import React, { useContext, useState } from 'react'
import classes from "./TestOption.module.css"
import DataContext from '../context/DataContext';
import red_x from "../../assets/icons8-x-96 (1).png";
import done from "../../assets/icons8-check-50.png"; 
const TestOption = ({option, clickOption, isChoosed, correctAnswer}) => {
  const {isComplete, setIsComplete} = useContext(DataContext);
  const class_name = () => {
    const baseClass = classes.test_card_var;
    const choosedClass = isChoosed && !isComplete ? classes.choosed : '';
    const correctClass = isComplete && correctAnswer === option ? classes.test_card_correct : '';
    const wrongClass = isChoosed && isComplete && correctAnswer !== option ? classes.test_card_wrong : '';
    const nonActive = isComplete & correctAnswer != option & !isChoosed? classes.non_active : "";
    return `${baseClass} ${choosedClass} ${correctClass} ${wrongClass} ${nonActive}`.trim();
  };

  const img =  () =>{
    return isChoosed && isComplete && correctAnswer !== option ? red_x : done;
  }
  return (
    <div className={class_name()} onClick={() => clickOption(option)} key = {option} >
      <div className={classes.test_card_text}>
        {option}
      </div>
        {isComplete && isChoosed?
          <img src={img()} alt="" className={classes.test_card_img} />
          :
          ""
        }
      </div>
  )
}

export default TestOption