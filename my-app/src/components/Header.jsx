import React, { useState } from 'react'
import userImage from "../assets/icons8-пользователь-мужчина-в-кружке-64.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const router = useNavigate();  
    const [options, setOptions] = useState([
        {
            title: "Home",
            router:"",
            isActive: false, 
            id: 1
        },
        {
            title: "Quizzes",
            router:"/quizzes",
            isActive: true,
            id: 2
        }
        
    ]);

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
          <div className="header_profile">
          <img src={userImage} alt="" className='userImg' onClick={() => router("/autentification")}/>
          </div>
          </div>
        </div>
      </header>
  )
}

export default Header