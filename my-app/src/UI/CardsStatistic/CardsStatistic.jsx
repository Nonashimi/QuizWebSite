import React from 'react'
import classes from "./statistic.module.css"
import ProgressCircle from '../progressCircle/ProgressCircle'
const CardsStatistic = ({tr, cor, toLearnAgain, toRestart, type}) => {
  return (
    <div className = {classes.statistic}>
      {tr === 0 ? 
      <div className={classes.stat_head}>        
      <div className={classes.title}>You did well, you did all the cards.</div>
  </div>
      :
      <div className={classes.stat_head}>        
      <div className={classes.title}>Excellent you're almost there!</div>
  </div>
      }
        
        <div className={classes.sections}>
            <div className={classes.section}>
                <div className={classes.section_title}>Your results</div>
                <div className={classes.section_data}>
                  <ProgressCircle tr = {tr} cor = {cor}/>
                  <div className={classes.res}>
                    <div className={classes.res_cor}>
                      <div className={classes.res_cor_text}>Знаю</div>
                      <div className={classes.res_cor_num}>{cor}</div>
                    </div>
                    <div className={classes.res_notcor}>
                      <div className={classes.res_notcor_text}>Надо изучить</div>
                      <div className={classes.res_ntocor_num}>{tr}</div>
                    </div>
                  </div>
                </div>
            </div>
            <div className={classes.section}>
                <div className={classes.section_title}>Next actions</div>
                <div className={classes.section_data}>
                  <div className={classes.section_inner}>
                    {tr === 0 ? 
                    ""
                    :
                      <button onClick={() => toLearnAgain()}>Подучить {tr} карточек</button>
                    }
                      
                      <button onClick={() => toRestart()}>Пройти {type == "test"?"тест":"карточки"} заново</button>
                  </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CardsStatistic