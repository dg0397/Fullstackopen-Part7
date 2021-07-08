import React from 'react'
import { Link } from 'react-router-dom'
//import BlogDetails from './BlogDetails'

const Blog = ({ blog }) => {
  //const [visible, setVisible] = useState(false)

  //const blogStyle = {
  //  paddingTop: 10,
  //  paddingLeft: 2,
  //  border: 'solid',
  //  borderWidth: 1,
  //  marginBottom: 5
  //}

  //const handleClick = () => setVisible(!visible)
  //
  //const handleLikeButton = () => {
  //  updateBlog({
  //    ...blog,
  //    likes: blog.likes + 1
  //  })
  //}
  //
  //const handleRemove = () => {
  //  if(window.confirm(`Remove Blog: ${blog.title}! by ${blog.author}`)){
  //    deleteBlog(blog)
  //  }
  //}
  //
  //return (
  //  <div style = {blogStyle} className = 'blog'>
  //    <h3>{blog.title} {blog.author} <button onClick = {handleClick}>{visible ? 'hide' : 'view'}</button> </h3>
  //    {
  //      visible && <BlogDetails blog = {blog} user = {user} handleLikeButton = {handleLikeButton} handleRemove = {handleRemove} />
  //    }
  //  </div>
  //)
  return (
    <div className = 'blog'>
      <h3>
        <Link to = {`/blogs/${blog.id}`}>{blog.title} {blog.author}</Link>
      </h3>
    </div>
  )
}

export default Blog