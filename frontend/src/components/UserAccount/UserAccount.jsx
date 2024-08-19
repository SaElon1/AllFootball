import React from 'react'
import './UserAccount.css'

const UserAccount = ({handleLogOut, user}) => {
  const handleClick = () => {
    handleLogOut()
  }
  return (
    <div className='UserAccount'>
        <h1>{user.name}</h1>
        <div className="UserAccount-logout">
            <button onClick={handleClick}>Log Out</button>
        </div>
    </div>
  )
}

export default UserAccount