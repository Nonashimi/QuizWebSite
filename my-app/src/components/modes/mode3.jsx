import React from 'react'
import cardImg from "../../assets/icons8-шорты-100.png";
import "./mode.css";
import { useLocation, useNavigate } from 'react-router-dom';
const Mode3 = () => {
  const router = useNavigate();
  const location = useLocation();
  return (
    <div className='mode' onClick={() => router(`${location.pathname}/cards`)}>
        <div className="mode_data">
            <img src={cardImg} alt="" />
            <div className="mode_title">Подбор</div>
        </div>
    </div>
  )
}

export default Mode3;