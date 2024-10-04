import React from 'react'
import ScrollBlock from '../UI/MyScrollBlock/scrollBlock'
import Login from '../components/Autentification/Login'
import SignUp from '../components/Autentification/SignUp'
import { useState } from 'react';

const SignInUp = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [inputData, setInputData] = useState({username: "", password: ""});
    const [signUpData, setSignUpData] = useState({username: "", email: "", password1: "", password2: ""});
    const changeUsername = (value) =>{
        setInputData({...inputData, username: value})
    }
    const changePassword = (value) =>{
        setInputData({...inputData, password: value})
    }
    const changeTypeLogin = () =>{
        setIsLogin(!isLogin);
    }
  return (
    <div className='main'>
    <div className='LogPage'>
     <ScrollBlock isLogin={isLogin} changeTypeLogin = {changeTypeLogin}></ScrollBlock>
      <div className='LogPage_content'>
        <div className='block'>
         <Login inputData = {inputData} changePassword = {changePassword} changeUsername = {changeUsername}></Login>
        </div>
        <div className='block'>
         <SignUp signUpData = {signUpData} setSignUpData = {setSignUpData}></SignUp>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignInUp