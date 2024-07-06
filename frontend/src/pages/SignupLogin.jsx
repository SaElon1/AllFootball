import React from 'react'
import './css/SignupLogin.css'


 const SignupLogin = () => {
  return (
    <div className='signuplogin'>
      <div className="signuplogin-container">
        <h1>Sign Up</h1>
        <div className="signuplogin-fields">
          <input type='text' placeholder='Name'></input>
          <input type='text' placeholder='Email'></input>
          <input type='text' placeholder='Password'></input>
        </div>
        <button>Sign up</button>
        <p className="signuplogin-login">Already have an account?
        <span>Login here</span>
        </p>


      </div>
    </div>
  )
}

export default SignupLogin