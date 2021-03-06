import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { initializeUsers } from '../reducers/usersReducer'
import User from './User'

const UserList = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(initializeUsers())
  }, [])

  return (
    <div>
      <h2>Users</h2>
      <table id = 'users-table'>
        <thead>
          <tr>
            <th>User</th>
            <th>Blogs Created</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map( user => (
              <User key = {user.id} user = {user}/>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default UserList