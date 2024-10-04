import React from 'react'
import classes from "./titleForPages.module.css";
const TitleForPages = ({title}) => {
  return (
    <div className={classes.nav}>
          <h2 className={classes.pageTitle}>{title}</h2>
        </div>
  )
}

export default TitleForPages;