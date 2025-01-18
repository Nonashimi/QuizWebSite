import React, { useState } from 'react'
import '../style/QuizPage.css';
import { usePagination } from '../hooks/usePagination';
import Pagination from '../UI/Pagination/pagination';
import CartsList from '../components/Cart/CartsList';
import TitleForQuiz from '../UI/TitleForPages/titleForQuiz';
import CardsList from '../components/Cards/CardsList';
import Author from '../UI/Author/author';
import ModeList from '../components/modes/modeList';
const QuizPage = () => { 
    const [cartPage, setCartPage] = useState(0);
    const totalPage = usePagination(cartPage);
    const data = [
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
  return (
    <div className="">
      <TitleForQuiz title = {"The Great Gatsby"}/>
      <ModeList></ModeList>
      <CartsList totalPage = {totalPage} data = {data}></CartsList>
      <Pagination cartPage={cartPage} setCartPage={setCartPage} totalCartPage={data.length}></Pagination> 
      <Author ></Author>   
      <CardsList ></CardsList>
      

    </div>
  )
}

export default QuizPage