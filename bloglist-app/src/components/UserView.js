import React from 'react'
import { useParams } from 'react-router-dom'
import { useUsersData } from '../hooks/useUsersData'

const UserView = () => {
  const id = useParams().id
  const { user } = useUsersData(id)
  if (!user) {
    return null
  }
  return(
    <div className = 'user-view'>
      <h2>{user.name}</h2>
      <h3>Added Blogs</h3>
      <ul>
        {
          user.blogs.map( blog => {
            return (
              <li key = {blog.id}>{blog.title}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default UserView