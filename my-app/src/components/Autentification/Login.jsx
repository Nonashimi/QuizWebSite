import React from "react";
import './Login.css';
import userIcon from '../../assets/icons8-user-96.png';
import passwordIcon from '../../assets/icons8-password-96.png';
import MyInput from "../../UI/myInput/myInput";
import MyButton from "../../UI/myButton/myButton";
const Login = ({inputData, changePassword, changeUsername}) =>{
    return(
        <div className='login'>
              <h1>Login</h1>
              <div className='inputForm'>
                <div className='inputForm_title'>Username</div>
                <img className='icon' src = {userIcon} alt='user icon'/>
                <MyInput placeholder = "Type your username" value = {inputData.username}  onChange = {event =>  changeUsername(event.target.value)}/>
              </div>
              <div className='inputForm'>
                <div className='inputForm_title'>Password</div>
                <img className='icon' src = {passwordIcon} alt='password icon'/>
                <MyInput placeholder = "type your password" type = "password" value = {inputData.password} onChange = {event => changePassword(event.target.value)}/>
              </div>
              <MyButton>Login</MyButton>
            </div>
    );
}

export default Login;