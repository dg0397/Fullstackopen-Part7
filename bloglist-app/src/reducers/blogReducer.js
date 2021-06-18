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

export default blogReducer