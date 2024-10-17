import React from 'react'
import classes from "./titleForPages.module.css";
import back from '../../assets/icons8-налево-100.png';
import { useNavigate } from 'react-router-dom';
const TitleForQuiz = ({title}) => {
    const router = useNavigate();
  return (
    <div className={classes.nav}>
        <div className="back" onClick={() => router(-1)}>
          <img src={back} alt="" className= {classes.back}/>
        </div>
          <h2 className={classes.pageTitle}>{title}</h2>
        </div>
  )
}

export default TitleForQuiz