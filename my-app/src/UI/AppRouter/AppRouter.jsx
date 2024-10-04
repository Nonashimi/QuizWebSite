import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignInUp from '../../pages/SignInUp'
import Main from '../../pages/Main'
import Quiz_page from '../../pages/QuizPagesList'
import Home from '../../pages/Home'

const AppRouter = () => {
  return (
    <Routes>
            <Route path = "/autentification" element = {<SignInUp></SignInUp>} />
            <Route path='/' element = {<Main></Main>}>
                <Route path="" element={<Home></Home>} />
                <Route path="quizzes/*" element={<Quiz_page />} />
            </Route>
        </Routes>
  )
}

export default AppRouter