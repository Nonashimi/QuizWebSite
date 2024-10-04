import React from "react";
import classes from "./turnToSignUp.module.css";
const TurnToSignUp = ({changeTypeLogin}) =>{
    return(
        <div className="">
            <div className = {classes.scroll_container}>
               <div className={classes.scroll_title}>Hello, Friend</div>
               <div className={classes.scroll_text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, alias esse eos delectus illo aut!
               </div>
               <button className = {classes.btn} onClick = {() => changeTypeLogin()}>Sign Up</button>
            </div>
        </div>
    );
}

export default TurnToSignUp;