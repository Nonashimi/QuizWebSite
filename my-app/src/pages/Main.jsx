import React, { useState } from 'react'
import "../style/Main.css"
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import Header from '../components/Header';
import DataContext from '../UI/context/DataContext';
const Home = () => {
  const [clickProfile, setClickProfile] = useState(false);
  
  return (
    <DataContext.Provider value={{clickProfile, setClickProfile}}>
      <div className='Main' onClick={() => setClickProfile(false)}>
        <Header/>
          <section>
              <Outlet />
          </section>
      </div>
    </DataContext.Provider>
    
  )
}

export default Home