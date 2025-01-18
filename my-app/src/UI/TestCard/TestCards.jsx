import React from 'react'
import classes from "./TestCard.module.css";
import TestCard from './TestCard';
const TestCards = ({questionsArray, changeQuestionArray}) => {
  return (
    <div className={classes.test_cards}>
         {questionsArray.map((i) =>
           <TestCard key = {i.id} changeQuestionArray = {changeQuestionArray} questionsArray = {questionsArray} questionArray = {i}/>
        )}
    </div>
  )
}

export default TestCards