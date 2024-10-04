import React from "react";
import classes from "./myInput.module.css";

const MyInput = (props) =>{
    return(
        
            <input type="text" className={classes.MyInput} {...props}/>
    );
}
export default MyInput;