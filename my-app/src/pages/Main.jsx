import React, { useState } from 'react'
import "../style/Main.css"
import {Outlet} from "react-router-dom";
import Header from '../components/Header';
const Home = () => {
  return (
    <div className='Home'>
      <Header/>
      <section>
              <Outlet />
      </section>
    </div>
  )
}

export default Home