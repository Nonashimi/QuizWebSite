import React, { useContext, useEffect, useMemo, useState } from 'react'
import userImage from "../assets/icons8-пользователь-мужчина-в-кружке-64.png";
import { useLocation, useNavigate } from 'react-router-dom';
import Parametr from '../UI/Parametrs/Parametr';
import DataContext from '../UI/context/DataContext';

const Header = () => {
    const router = useNavigate();  
    const {clickProfile, setClickProfile} = useContext(DataContext);
    const location = useLocation();
    const [options, setOptions] = useState([
        {
            title: "Home",
            router:"",
            isActive: location.pathname == '/', 
            id: 1
        },
        {
            title: "Quizzes",
            router:"/quizzes",
            isActive: location.pathname == '/quizzes/',
            id: 2
        }
        
    ]);

    useEffect(() =>{

    }, [location])

    const clickOption = (id) =>{
        let arr = options.map(option =>{
            if(option.id == id){
                option.isActive = true;
                router(option.router);
            }else{
                option.isActive = false;
            }
            return option;
        });
        setOptions(arr);

    }
  return (
    <header>
        <div className="header_container">
          <h1 className="title">Quiz</h1>
          <div className="header_components">
          <div className="header_options">

            {options.map(option => 
                <div key={option.id}  className = {`header_option ${option.isActive? "option_active": ""}`} onClick={() => clickOption(option.id)}>{option.title}</div>
            )
            }
        </div>
          <div className="header_profile" onClick={(e) => e.stopPropagation()}>
          <img src={userImage} alt="" className='userImg' onClick={() => setClickProfile(!clickProfile)}/>
          <Parametr></Parametr>
          </div>
          </div>
        </div>
      </header>
  )
}

export default Header