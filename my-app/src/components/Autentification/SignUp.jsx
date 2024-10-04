import React from "react";
import userIcon from '../../assets/icons8-user-96.png';
import emailIcon from "../../assets/icons8-новый-пост-96.png";
import passwordIcon from '../../assets/icons8-password-96.png';
import "./SignUp.css";
import MyButton from "../../UI/myButton/myButton";
import MyInput from "../../UI/myInput/myInput";
const SignUp = ({signUpData, setSignUpData}) =>{
    return(
        <div className="signUp">
             <h1>Sign Up</h1>
             <div className='inputForm'>
                <div className='inputForm_title'>Username</div>
                <img className='icon' src = {userIcon} alt='user icon'/>
                <MyInput placeholder = "Type your username" value = {signUpData.username} onChange = {event => setSignUpData({...signUpData, username:event.target.value})}/>
              </div>
              <div className='inputForm'>
                <div className='inputForm_title'>Email</div>
                <img className='icon' src = {emailIcon} alt='email icon'/>
                <MyInput placeholder = "Type your email address" value = {signUpData.email} onChange = {event => setSignUpData({...signUpData, email:event.target.value})}/>
              </div>
              <div className='inputForm'>
                <div className='inputForm_title'>Password</div>
                <img className='icon' src = {passwordIcon} alt='password icon'/>
                <MyInput placeholder = "create a password" type = "password" value = {signUpData.password1}  onChange = {event => setSignUpData({...signUpData, password1:event.target.value})}/>
              </div>
              <div className='inputForm'>
                <div className='inputForm_title'>Repeat Password</div>
                <img className='icon' src = {passwordIcon} alt='password icon' />
                <MyInput placeholder = "repeate a password" type = "password" value = {signUpData.password2} onChange = {event => setSignUpData({...signUpData, password2:event.target.value})}/>
              </div>
              <MyButton>Sign Up</MyButton>
        </div>
    );
}


export default SignUp;