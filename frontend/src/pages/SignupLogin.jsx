import React, { useEffect, useState } from 'react'
import './css/SignupLogin.css'
import userService from '../services/user'
import UserAccount from '../components/UserAccount/UserAccount'

 const SignupLogin = () => {
  const [userInformation, setUserInformation] = useState({
    name:"",
    email:"",
    password:""
  })

  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)

  const resetUserInformation = {
    name:"",
    email:"",
    password: ""
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAllfootballUser')
    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const handleChange = (event) => {
    setUserInformation({...userInformation, [event.target.name]:event.target.value})
    console.log(userInformation)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!isLogin){
    userService
    .createUser(userInformation)
    .then(returned => {
      alert('User created successfully')
      setUserInformation(resetUserInformation)
      console.log(returned)
    })
  }else {
    userService
    .login(userInformation)
    .then(returned => {
      console.log(returned)
      alert('Logged in successfully')
      setUserInformation(resetUserInformation)
      setUser(returned)
      window.localStorage.setItem('loggedAllfootballUser', JSON.stringify(returned))
    })
  }
}

const handleLogOut = () => {
  if (window.confirm("Confirm log out")) {
    window.localStorage.removeItem('loggedAllfootballUser')
    setUser(null)
  }else {
    return;
  }
}

  const toggleForm = () => {
    setIsLogin(!isLogin)
    setUserInformation(resetUserInformation)
  }

  return (
    <div className='signuplogin'>
      {user ? (
        <UserAccount user={user} handleLogOut={handleLogOut}/>
      ) : (
      <div className="signuplogin-container">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form className="signuplogin-fields" onSubmit={handleSubmit}>
          {!isLogin && (
            <input 
            type='text' 
            placeholder='Name'
            name='name' 
            value={userInformation.name} 
            onChange={handleChange}></input>
          )}
          <input 
          type='email' 
          placeholder='Email' 
          name='email' 
          value={userInformation.email} 
          onChange={handleChange}>
          </input>
          <input 
          type='password' 
          placeholder='Password' 
          name='password' 
          value={userInformation.password} 
          onChange={handleChange}></input>
        <button type='submit'>{isLogin ? "Login" : "Sign up"}</button>
        <p className="signuplogin-login">{isLogin ? "Don't have an account? ":"Already have an account? "}
        <span onClick={toggleForm}>{isLogin ? "Sign up here" : "Login Here"}</span>
        </p>
        </form>
      </div>
      )}
    </div>
  )
          }

export default SignupLogin