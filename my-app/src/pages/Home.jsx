import React from 'react'
import TitleForPages from '../UI/TitleForPages/TitleForPages';
import "../style/Home.css";
const Home = () => {
  return (
    <div className="Home">
      <TitleForPages title = "Home"/>
      <div className='homeSection'><h1>Welcome to our WebSite</h1></div>
    </div>
  )
}

export default Home