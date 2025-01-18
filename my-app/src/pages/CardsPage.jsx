import React, { useState } from 'react'
import "../style/CardsPage.css"
import CardPageTop from '../UI/CardPageTop/CardPageTop'
import { usePagination } from '../hooks/usePagination'
import CardsStatistic from '../UI/CardsStatistic/CardsStatistic';
import CartProcess from '../UI/CartProcess/CartProcess';
const CardsPage = () => {
  const [cartPage, setCartPage] = useState(0);
  const totalPage = usePagination(cartPage);
  const [tryAgain, setTryAgain] = useState([]);
  const [correct, setCorrect] = useState([]);
  let arr = [
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, hic!",
      answer: "Lorem ipsum dolor sit amet."
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, hic!",
      answer: "Lorem ipsum dolor sit amet."
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, hic!",
      answer: "Lorem ipsum dolor sit amet."
    },
    {
      id: 4,
      question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, hic!",
      answer: "Lorem ipsum dolor sit amet."
    },
    {
      id: 5,
      question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, hic!",
      answer: "Lorem ipsum dolor sit amet."
    }
  ];
  const[data, setData] = useState(arr);

  const toLearnAgain = () =>{
    setCartPage(0);
    setData(tryAgain);
    setTryAgain([]);
    setCorrect([]);
  }
  const toRestart = () =>{
    setData(arr);
    setCartPage(0);
    setTryAgain([]);
    setCorrect([]);
  }
  return (
    <div className='CardsPage'>
        <CardPageTop cartPage = {cartPage + 1} totalPage = {data.length}/>
        {cartPage === data.length?
        <CardsStatistic toLearnAgain = {toLearnAgain} toRestart = {toRestart} tr = {tryAgain.length} cor = {correct.length}/>
          :
        <CartProcess cartPage = {cartPage} toLearnAgain = {toLearnAgain} data = {data} totalPage={totalPage} setCartPage = {setCartPage} tryAgain = {tryAgain} correct = {correct} setTryAgain = {setTryAgain} setCorrect = {setCorrect}/>
        }
        
    </div>
  )
}

export default CardsPage