import React from 'react'
import { useParams } from 'react-router-dom'
import { useBlogsData } from '../hooks/useUsersData'

import BlogCommentForm from './BlogCommentForm'

const UserView = () => {
  const id = useParams().id
  const { blog } = useBlogsData(id)

  if (!blog) {
    return null
  }
  return(
    <div className = 'blog-view'>
      <h2>{blog.title} {blog.author}</h2>
      <p><a target= '_blank' href = {blog.url} rel="noreferrer">{blog.url}</a></p>
      <p>{blog.likes} {blog.likes > 1 ? 'likes':'like'}<button>Like</button></p>
      <p>Added by {blog.user.name}</p>
      {
        <div>
          <h3>Comments</h3>
          <BlogCommentForm blogid = { id } />
          {
            blog.comments.length > 0 && (
              <ul>
                {
                  blog.comments.map( comment => {
                    return <li key = {comment}>{comment}</li>
                  })
                }
              </ul>
            )
          }
        </div>
      }
    </div>
  )
}

export default UserView