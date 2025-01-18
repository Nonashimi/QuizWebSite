import React, { useState } from 'react'
import classes from "./TestCard.module.css"
import TestOption from '../TestOptions/TestOption';
const TestCard = ({questionArray, changeQuestionArray, questionsArray}) => {
  const [optionsData, setOptionsData] = useState(questionArray.options);
  const clickOption = (option) =>{
    const updatedOptions = optionsData.map(opt => 
    {
      if(opt.option === option){
        questionArray.clicked = !opt.choosed;
        return opt = { ...opt, choosed: !opt.choosed }
      }else{
        return opt = { ...opt, choosed: false } ;
      }
  });
    questionArray.options = updatedOptions;
    setOptionsData(updatedOptions);
    updateArray();
  }
  const updateArray = () =>{
    const updatedArr = questionsArray.map(arr => {
      if(questionArray.id == arr.id){
        return questionArray;
      }else{
        return arr;
      }
    });
    changeQuestionArray(updatedArr);
  }
  return (
    <div className={classes.test_card}>
            <div className={classes.test_card_question}>{questionArray.id}. {questionArray.question}</div>
            <div className={classes.test_card_text}>Choose the right option</div>
            <div className={classes.test_card_variants}>
              {optionsData.map(option =>(
                <TestOption option={option.option} correctAnswer = {questionArray.correctAnswer} key = {option.option} isChoosed = {option.choosed} clickOption = {clickOption}/>
              ))}
            </div>
        </div>
  )
}

export default TestCard