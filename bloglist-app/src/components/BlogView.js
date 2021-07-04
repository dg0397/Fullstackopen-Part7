import React from 'react'
import { useParams } from 'react-router-dom'
import { useBlogsData } from '../hooks/useUsersData'
import { useField } from '../hooks/useField'
import { useDispatch } from 'react-redux'
import { addComment } from '../reducers/blogReducer'

const UserView = () => {
  const id = useParams().id
  const { blog } = useBlogsData(id)
  const dispatch = useDispatch()
  const comment = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(comment.value)
    dispatch(addComment(comment.value,id))

    comment.onReset()

  }
  if (!blog) {
    return null
  }
  return(
    <div>
      <h2>{blog.title} {blog.author}</h2>
      <p><a target= '_blank' href = {blog.url} rel="noreferrer">{blog.url}</a></p>
      <p>{blog.likes} {blog.likes > 1 ? 'likes':'like'}<button>Like</button></p>
      <p>Added by {blog.user.name}</p>
      {
        <div>
          <h3>Comments</h3>
          <form onSubmit = { handleSubmit }>
            <input {...comment}/>
            <button>Add Comment</button>
          </form>
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