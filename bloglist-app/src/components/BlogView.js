import React from 'react'
import { useParams } from 'react-router-dom'
import { useBlogsData } from '../hooks/useUsersData'

const UserView = () => {
  const id = useParams().id
  const { blog } = useBlogsData(id)
  if (!blog) {
    return null
  }
  return(
    <div>
      <h2>{blog.title} {blog.author}</h2>
      <p><a target= '_blank' href = {blog.url} rel="noreferrer">{blog.url}</a></p>
      <p>{blog.likes} {blog.likes > 1 ? 'likes':'like'}<button>Like</button></p>
      <p>Added by {blog.user.name}</p>
    </div>
  )
}

export default UserView