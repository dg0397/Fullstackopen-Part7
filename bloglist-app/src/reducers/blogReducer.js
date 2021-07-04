import blogServices from '../services/blogs'

import { setMessage } from './notificationReducer'


const blogReducer = (state = [],action) => {
  switch(action.type){
  case 'INIT_BLOGS':{
    return [...action.data]
  }
  case 'ADD':{
    return [...state,action.data]
  }
  case 'LIKE' : {
    const updatedBlog = action.data

    return state.map( blog => blog.id === updatedBlog.id ? updatedBlog : blog)
  }
  case 'DELETE' : {
    const blogToDelete = action.data
    return state.filter(blog => blog.id !== blogToDelete.id)
  }
  case 'ADD_COMMENT' : {
    const commentedBlog = action.data

    return state.map( blog => blog.id === commentedBlog.id ? commentedBlog : blog)
  }
  default:
    return state
  }
}

export const addBlog = (content) => {
  return async dispatch => {
    const newBlog = await blogServices.create(content)
    console.log(newBlog)
    dispatch({
      type : 'ADD',
      data : newBlog
    })
    dispatch(setMessage(`Added new Blog: ${newBlog.title}`,5))
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogServices.getAll()
    dispatch({
      type : 'INIT_BLOGS',
      data : blogs
    })
  }
}

export const likeBlog = (content) => {
  return async dispatch => {
    const updatedBlog = await blogServices.update(content)
    dispatch({
      type: 'LIKE',
      data : updatedBlog
    })
    dispatch(setMessage(`Updated Blog: ${updatedBlog.title}`,5))
  }
}

export const deleteOneBlog = (content) => {
  return async dispatch => {
    await blogServices.deleteBlog(content.id)
    dispatch({
      type:'DELETE',
      data : content
    })
    dispatch(setMessage(`Deleted Blog: ${content.title}`,5))
  }
}

export const addComment = ( comment,blogId ) => {
  return async dispatch => {
    const commentedBlog = await blogServices.addCommnet(comment,blogId)
    dispatch({
      type : 'ADD_COMMENT',
      data : commentedBlog
    })
  }
}

export default blogReducer