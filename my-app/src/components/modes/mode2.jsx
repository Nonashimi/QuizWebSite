import React from 'react'
import cardImg from "../../assets/icons8-тест-100.png";
import "./mode.css";
import { useLocation, useNavigate } from 'react-router-dom';
const Mode2 = () => {
  const router = useNavigate();
  const location = useLocation();
  return (
    <div className='mode' onClick={() => router(`${location.pathname}/tests`)}>
        <div className="mode_data">
            <img src={cardImg} alt="" />
            <div className="mode_title">Тест</div>
        </div>
    </div>
  )
}

export default Mode2;