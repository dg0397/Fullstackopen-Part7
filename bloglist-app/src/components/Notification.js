import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.message)

  return (
    <>
      {
        notification &&
        <div className={notification.includes('Error') ? 'error' : 'success'} >
          {notification}
        </div>
      }
    </>
  )
}

export default Notification
