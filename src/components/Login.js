import React from 'react'
import '../styles/Login.css'
import CloseBtn from "../imagesmb/icons/closeicon.png";
import Lines from './Lines'
import { Link } from 'react-router-dom';
const Login = ({ showAccNav }) => {
  return (
    <div className='login'>
        <div className="login_close">
        <button className="login_btn" onClick={showAccNav}>
        <Link to='/'><img className="login_btn_img" src={CloseBtn} alt="close" /></Link>
        </button>
      </div>
    <div className="login_home">
      <h3 className="login_title">Log In to Your Account</h3>
      <div className="login_home_inputs">
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Password' />
      </div>
    </div>
    <div>
      <button className='login_span'>Forgot password?</button>
    </div>

    <div className='login_group'>
      <button className='btn_btn'>Log In</button>
      

     
      <div className='login_group_gr'>
        <h3>Don’t have an account?</h3>
        <Link to='/signup'><button>Sign Up</button></Link>
      </div>
      
        <div className='login_line'>
          <Lines/>
          </div>

    </div>
   

        </div>
  )
}

export default Login