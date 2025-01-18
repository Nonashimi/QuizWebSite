import React from 'react'
import Mode1 from './mode1'
import "./modeList.css";
import Mode2 from './mode2';
import Mode3 from './mode3';
const ModeList = () => {
  return (
    <div className='mode_list'>
        <Mode1/>
        <Mode2/>
        <Mode3/>
    </div>
  )
}

export default ModeList