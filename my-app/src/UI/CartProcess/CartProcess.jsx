import React from 'react'
import CardsCounter from '../CardsCounter/CardsCounter'
import CartsList from '../../components/Cart/CartsList'
import CardPageBottom from '../CardPageBottom/CardPageBottom'

const CartProcess = ({totalPage, data, cartPage, setCartPage, tryAgain, correct, setTryAgain, setCorrect}) => {
  return (
    <div className="CartProcess">
    <CardsCounter tr = {tryAgain.length} cor = {correct.length}/>
    <CartsList totalPage={totalPage} data = {data}></CartsList>
    <CardPageBottom cartPage = {cartPage} totalPage={data.length} element = {data[cartPage]} setCartPage = {setCartPage} tryAgain = {tryAgain} correct = {correct} setTryAgain = {setTryAgain} setCorrect = {setCorrect}/>
    </div>
  )
}

export default CartProcess