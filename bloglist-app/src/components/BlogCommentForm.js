import React from 'react'
import { useField } from '../hooks/useField'
import { useDispatch } from 'react-redux'
import { addComment } from '../reducers/blogReducer'



const BlogCommentForm = ({ blogid }) => {
  const comment = useField('text')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addComment(comment.value,blogid))

    comment.onReset()

  }
  return (
    <form onSubmit = { handleSubmit }>
      <input {...comment}/>
      <button>Add Comment</button>
    </form>
  )
}

export default BlogCommentForm