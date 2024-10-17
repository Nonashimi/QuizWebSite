import React, { useContext, useState } from 'react'
import classes from "./parametr.module.css";
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
const Parametr = () => {
    const {clickProfile, setClickProfile} = useContext(DataContext);
    const router = useNavigate();
    const clickMyProfile = () =>{
        router("/my_profile");
        setClickProfile(!clickMyProfile);
    }
  return (
    <div className={`${classes.parametrs} ${clickProfile ? classes.active : ""}`}>
        <div className={classes.parametr} onClick={() => clickMyProfile()}>My Profile</div>
        <div className={classes.parametr} onClick={() => router("/autentification")}>Log out</div>
    </div>
  )
}

export default Parametr