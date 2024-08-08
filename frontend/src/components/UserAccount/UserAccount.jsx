import React from 'react'

const UserAccount = ({setIsLogged,handleLogOut, user}) => {
  const handleClick = () => {
    handleLogOut()
    setIsLogged(false)
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