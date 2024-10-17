import React from 'react'
import cardImg from "../../assets/icons8-cards.png";
import "./mode.css";
import { useLocation, useNavigate } from 'react-router-dom';
const Mode = () => {
  const router = useNavigate();
  const location = useLocation();
  return (
    <div className='mode' onClick={() => router(`${location.pathname}/cards`)}>
        <div className="mode_data">
            <img src={cardImg} alt="" />
            <div className="mode_title">Карточки</div>
        </div>
    </div>
  )
}

export default Mode;