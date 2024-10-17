import React, { useState } from 'react'
import '../style/QuizPage.css';
import { usePagination } from '../hooks/usePagination';
import Pagination from '../UI/Pagination/pagination';
import CartsList from '../components/Cart/CartsList';
import TitleForQuiz from '../UI/TitleForPages/titleForQuiz';
import CardsList from '../components/Cards/CardsList';
import Author from '../UI/Author/author';
import Mode from '../components/modes/mode';
import ModeList from '../components/modes/modeList';
const QuizPage = () => {
    // const [data, setData] = useState([]);
    // useEffect(() =>{
    //   // fetchData();
    // },[]);

    // const fetchData = async() =>{
    //   const response = await QuizService.getQuizQuestionById(1);
    //   setData(response.data);
    // }   
    const [cartPage, setCartPage] = useState(0);
    const totalPage = usePagination(cartPage);
  return (
    <div className="">
      <TitleForQuiz title = {"The Great Gatsby"}/>
      <ModeList></ModeList>
      <CartsList totalPage={totalPage}></CartsList>
      <Pagination cartPage={cartPage} setCartPage={setCartPage} totalCartPage={3}></Pagination> 
      <Author></Author>   
      <CardsList></CardsList>
    </div>
  )
}

export default QuizPage