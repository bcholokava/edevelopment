import React from 'react'
import Container from '../components/Container'
import warning from '../imagesmb/menu/warning.png'
import Lines from "../components/Lines";
import '../styles/forgot.css'

const ForgotPassword = () => {
  return (
    <Container>
     <section className='fg-section'>
      <div className='fg-section_div'>
        <div className='fg-section_div2'>
          <img src={warning} alt="warning" />
          <h3 className='fg-section_h3'>Forgot Password</h3>
        </div>
        <div className='fg-section_div2'>
          <p>Enter your email address and we’ll send you a link to reset your password.</p>
          <input type="email" placeholder='Email address' />
          <button>Send Link</button>
        </div>
      </div>
             </section>

             <div className='fg-section_lines'>
      <Lines />
      </div>
    </Container>
  )
}

export default ForgotPassword