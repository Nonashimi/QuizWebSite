import React from 'react'
import classes from "./TestCard.module.css"
import MyButton from '../myButton/myButton'
const TestCheckButton = ({clickIsComplete}) => {
  return (
    <div className={classes.test_cart_button}>
            <MyButton onClick = {() => clickIsComplete()} style = {{width: "50%", padding: "17px 0", fontSize: "20px"}}>Check Test</MyButton>
        </div>
  )
}

export default TestCheckButton