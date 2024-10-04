import React from 'react'
import Quiz from './Quiz'
import classes from "./Quiz_List.module.css"
const Quiz_list = ({arr}) => {
  return (
    <div className={classes.Quiz_List}>
        {arr.map((data)=> 
            <Quiz data = {data}></Quiz>)
        }
    </div>
  )
}

export default Quiz_list