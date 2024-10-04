import React from "react";
import classes from "./scrollBlock.module.css";
import TurnToSignUp from "../turnToSignUp/turnToSignUp";
import TurnToSignIn from "../turnToSignUp/turnToSignIn";
const ScrollBlock = ({isLogin, changeTypeLogin}) =>{
    return(
        <div className={`${classes.scrollBlock} ${isLogin ? classes.isLogin : classes.isSignIn}`}>
            {isLogin ?             
            <TurnToSignUp changeTypeLogin = {changeTypeLogin}></TurnToSignUp>:
            <TurnToSignIn changeTypeLogin = {changeTypeLogin}></TurnToSignIn>
            }
        </div>
    );
}


export default ScrollBlock;