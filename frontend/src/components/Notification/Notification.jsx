import React from 'react'
import './Notification.css'

const Notification = ({message, type}) => {
    if (message === null) {
        return null
    }

    const classname = `Notification ${type}`

  return (
    <div className={classname}>
        {message}
    </div>
  )
}

export default Notification