import React, { useState } from 'react'
import '../styles/signup.css'
import Lines from './Lines'
import CloseBtn from "../imagesmb/icons/closeicon.png";
import Home from './Home';
import { Link } from 'react-router-dom';

const Signup = () => {
 
  return (
    <div className='signup'>
        <div className="signup_close">
        <button className="signup_btn">
          <Link to='/'><img className="signup_btn_img" src={CloseBtn} alt="close" /></Link>
        </button>
      </div>
      <div className="signup_home">
      <h3 className="signup_title">Join Eventa!</h3>
      {/* Inputs */}
          <div className='signup_group_gr'>
            <h3>Already have an account?</h3>
            <Link to='/login'><button>Log In</button></Link>
          </div>
    
          <div className="signup_home_inputs">
            <div className="signup_home_input">
                <input style={{marginRight:'0.7rem',width: '13rem'}} type="text" placeholder='First name' />
                <input style={{width: '13rem'}} type="text" placeholder='Last name' />
            </div>
           
              <div>
                <input type="text" placeholder='Email address' />
                <input type="text" placeholder='Password' />
                <input type="text" placeholder='Repeat password' />
              </div>

              <div className='signup_group_gr2'>
            <h3>By creating an account, I agree with Eventa’s <button>Privacy Policy</button> and <button>Terms of Service.</button></h3>
          </div>

          <div style={{marginTop:'6rem'}}>
            <button className='btn_btn'>Sign Up</button>
          </div>

          <div className='login_line'>
          <Lines/>
          </div>
           
          </div>
        
              </div>
     


    </div>
  )
}

export default Signup