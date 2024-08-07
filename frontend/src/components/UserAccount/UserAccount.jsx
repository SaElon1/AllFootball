import React from 'react'

const UserAccount = ({handleLogOut, user}) => {
  return (
    <div className='UserAccount'>
        <h1>{user.name}</h1>
        <div className="UserAccount-logout">
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    </div>
  )
}

export default UserAccount