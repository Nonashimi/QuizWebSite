import React from 'react'
import { useParams } from 'react-router-dom'
import TitleForPages from '../UI/TitleForPages/TitleForPages';
import Cart from '../components/Cart/Cart';

const QuizPage = () => {
    const router = useParams();
  return (
    <div className="">
      <TitleForPages title = "The Great Gatsby"></TitleForPages>
      <Cart></Cart>
    </div>
  )
}

export default QuizPage