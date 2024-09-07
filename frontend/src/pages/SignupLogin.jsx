import React, { useEffect, useState } from 'react'
import './css/SignupLogin.css'
import userService from '../services/user'
import UserAccount from '../components/UserAccount/UserAccount'
import productService from '../services/product'
import Notification from '../components/Notification/Notification'

 const SignupLogin = ({setIsLogged,user, setUser, handleLogOut}) => {
  const [userInformation, setUserInformation] = useState({
    name:"",
    email:"",
    password:""
  })
  const [isLogin, setIsLogin] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationType, setNotificationType] = useState("success")

  const resetUserInformation = {
    name:"",
    email:"",
    password: "" 
  }

  const handleChange = (event) => {
    setUserInformation({...userInformation, [event.target.name]:event.target.value})
    console.log(userInformation)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if(!isLogin){
      if(userInformation.name === "" || userInformation.email === "" || userInformation.password === ""){
        setNotificationMessage('Information missing. Please try again!')
        setNotificationType("error")
        setTimeout(() => {
          setNotificationMessage(null)
        }, 3000)
        return     
      }
      else {
        try{
        const user = await userService.createUser(userInformation)
      alert('User created successfully')
      setNotificationMessage('User created succesfully!')
      setNotificationType('success')
      setTimeout(() => {
        setNotificationMessage(null)
      }, 3000)
      setUserInformation(resetUserInformation)
      console.log(user)
      }catch(exception){
        console.log('Error in creating user')
      }
    }
    
  }else {
    if(userInformation.email === "" || userInformation.password === ""){
      setNotificationMessage('Information missing. Please try again!')
      setNotificationType("error")
      setTimeout(() => {
        setNotificationMessage(null)
      }, 3000)
      return     
    }else {
    try{
      const user = await userService.login(userInformation)
      if (user){
        console.log(user)
        setUserInformation(resetUserInformation)
        setUser(user)
        window.localStorage.setItem('loggedAllfootballUser', JSON.stringify(user))
        setIsLogged(true)
        productService.setToken(user.token)
      }
    }catch(exception){
      console.log("Invalid password or email")
      alert('Invalid email or password. Please try again!')
      setNotificationMessage('Invalid email or password. Please try again!')
      setNotificationType("error")
      setTimeout(() => {
        setNotificationMessage(null)
      }, 3000)
    }
  }
}
}

  const toggleForm = () => {
    setIsLogin(!isLogin)
    setUserInformation(resetUserInformation)
  }

  return (
    <div className='signuplogin'>
      {user ? (
        <UserAccount user={user} handleLogOut={handleLogOut} setIsLogged={setIsLogged}/>
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
      <Notification message={notificationMessage} type={notificationType}></Notification>
    </div>
  )
          }

export default SignupLogin