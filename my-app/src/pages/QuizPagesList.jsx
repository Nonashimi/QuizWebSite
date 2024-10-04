import React from 'react'
import Quiz_list from '../components/MyQuizzes/Quiz_list';
import { Route, Routes } from 'react-router-dom';
import QuizPage from './QuizPage';
import TitleForPages from '../UI/TitleForPages/TitleForPages';

const Quiz_page = () => {
    const arr = [
        {
          title: "The Great Gatsby",
          quiz_number: 180,
          quiz_owner: "Olzhas Yergali",
          id: 1
        },
        {
          title: "Cruel prince",
          quiz_number: 170,
          quiz_owner: "Danial Orunbek",
          id: 2
        },
        {
          title: "English for B1",
          quiz_number: 100,
          quiz_owner: "Nurlan_SSS",
          id: 3
        },
        {
          title: "Disney Princess",
          quiz_number: 30,
          quiz_owner: "Zhantore_legenda",
          id: 4
        }
      ];
  return (
    <div className="">
        <div className="container">
            <Routes>
                <Route path='' element = {
                  <div> 
                    <TitleForPages title = "Quizzes"/>
                    <Quiz_list arr = {arr}></Quiz_list>
                  </div>
                         }></Route>
                <Route path = "/:id" element = {<QuizPage></QuizPage>}></Route>
            </Routes>
        </div>
    </div>
  )
}

export default Quiz_page