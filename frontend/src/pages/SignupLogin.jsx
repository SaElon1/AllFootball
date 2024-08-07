import React, { useState } from 'react'
import './css/SignupLogin.css'
import userService from '../services/user'


 const SignupLogin = () => {
  const [userInformation, setUserInformation] = useState({
    name:"",
    email:"",
    password:""
  })

  const resetUserInformation = {
    name:"",
    email:"",
    password: ""
  }

  const handleChange = (event) => {
    setUserInformation({...userInformation, [event.target.name]:event.target.value})
    console.log(userInformation)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    userService
    .createUser(userInformation)
    .then(returned => {
      alert('User created successfully')
      setUserInformation(resetUserInformation)
      console.log(returned)
    })
  }

  return (
    <div className='signuplogin'>
      <div className="signuplogin-container">
        <h1>Sign Up</h1>
        <form className="signuplogin-fields" onSubmit={handleSubmit}>
          <input type='text' placeholder='Name' name='name' value={userInformation.name} onChange={handleChange}></input>
          <input type='text' placeholder='Email' name='email' value={userInformation.email} onChange={handleChange}></input>
          <input type='text' placeholder='Password' name='password' value={userInformation.password} onChange={handleChange}></input>
        <button type='submit'>Sign up</button>
        <p className="signuplogin-login">Already have an account?
        <span>Login here</span>
        </p>
        </form>
      </div>
    </div>
  )
}

export default SignupLogin