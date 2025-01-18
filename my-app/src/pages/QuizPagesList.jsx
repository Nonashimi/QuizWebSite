import React, { useEffect, useState } from 'react'
import Quiz_list from '../components/MyQuizzes/Quiz_list';
import { Route, Routes } from 'react-router-dom';
import QuizPage from './QuizPage';
import TitleForPages from '../UI/TitleForPages/TitleForPages';
import QuizService from '../components/API/QuizService';
import Functions from '../components/functions/functions';
import { useQuiz } from '../hooks/useQuiz';
import NotFound from '../components/NotFound/notFound';

const Quiz_page = () => {
  const [data, setData] = useState([]);
  const [functions, setFunctions] = useState({inputValue: "", selectValue: ""});
    const arr = [
        {
          title: "The Great Gatsby",
          quiz_number: 180,
          quiz_owner: "Olzhas Yergali",
          id: 1,
          level: "easy"
        },
        {
          title: "Cruel prince",
          quiz_number: 170,
          quiz_owner: "Danial Orunbek",
          id: 2,
          level: "hard"
        },
        {
          title: "English for B1",
          quiz_number: 100,
          quiz_owner: "Nurlan_SSS",
          id: 3,
          level: "medium"
        },
        {
          title: "Disney Princess",
          quiz_number: 30,
          quiz_owner: "Zhantore_legenda",
          id: 4,
          level: "easy"
        }
      ];

    const sortedAndSearchedQuiz = useQuiz(arr, functions.inputValue, functions.selectValue);


      // useEffect(() =>{
      //   fetchData();
      //   console.log(data);
        
      // });

      // const fetchData = async() =>{
      //   const response = await QuizService.getAllQuiz();
      //   setData(response.data);
      // }
  return (
    <div className="">
        <div className="container">
            <Routes>
                <Route path='' element = {
                  <div> 
                    <TitleForPages title = "Quizzes"/>
                    <div className="quiz_list_container">
                    <Functions functions={functions} setFunctions={setFunctions}></Functions>
                    {sortedAndSearchedQuiz.length == 0 
                    ? <NotFound></NotFound>
                    : <Quiz_list arr = {sortedAndSearchedQuiz}></Quiz_list>
                    }
                    </div>
                   
                    
                  </div>
                         }></Route>
                <Route path = "/:id" element = {<QuizPage></QuizPage>}></Route>
            </Routes>
        </div>
    </div>
  )
}

export default Quiz_page