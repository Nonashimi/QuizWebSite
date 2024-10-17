import React from 'react'
import CartsList from '../components/Cart/CartsList'
import "../style/CardsPage.css"
import { useNavigate } from 'react-router-dom'

import CardPageTop from '../UI/CardPageTop/CardPageTop'
import CardPageBottom from '../UI/CardPageBottom/CardPageBottom';
const CardsPage = () => {
  return (
    <div className='CardsPage'>
        <CardPageTop/>
        <CartsList totalPage={10}></CartsList>
        <CardPageBottom/>
    </div>
  )
}

export default CardsPage