import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { setMessage } from './reducers/notificationReducer'

import blogService from './services/blogs'
import loginService from './services/login'

import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'

import './App.css'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)

  const blogFormRef = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogIn = async (userData) => {
    try {
      const user = await loginService.getLogin(userData)
      dispatch(setMessage(`Welcome ${user.name}`,5))
      //setNotification(`Welcome ${user.name}`)
      //setTimeout(() => {
      //  setNotification(null)
      //}, 5000)
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
      blogService.setToken(user.token)
      setUser(user)
    } catch (error) {
      console.log(error)
      dispatch(setMessage('Error: Wrong username or password',5))
      //setNotification('Error: Wrong username or password')
      //setTimeout(() => {
      //  setNotification(null)
      //}, 5000)
    }
  }
  const handleLogOut = () => {
    window.localStorage.clear()
    setUser(null)
  }
  const handleCreateNewBlog = async (blog) => {
    try {
      blogFormRef.current.toggleVisibility()
      const newBlog = await blogService.create(blog)
      setBlogs(blogs.concat(newBlog))
      dispatch(setMessage(`Added new Blog: ${newBlog.title}`,5))

      //setNotification(`Added new Blog: ${newBlog.title}`)
      //setTimeout(() => {
      //  setNotification(null)
      //}, 5000)
    } catch (error) {
      console.log(error)
    }
  }

  const updateBlog = async(blog) => {
    try{
      const updatedBlog = await blogService.update(blog)
      setBlogs(blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog))
      dispatch(setMessage(`Updated Blog: ${updatedBlog.title}`,5))

      //setNotification(`Updated Blog: ${updatedBlog.title}`)
      //setTimeout(() => {
      //  setNotification(null)
      //}, 5000)
    } catch(error){
      console.log(error)
    }
  }
  const deleteBlog = async (blogToDelete) => {
    try{
      await blogService.deleteBlog(blogToDelete.id)
      setBlogs(blogs.filter(blog => blog.id !== blogToDelete.id))
      dispatch(setMessage(`Deleted Blog: ${blogToDelete.title}`,5))

      //setNotification(`Deleted Blog: ${blogToDelete.title}`)
      //setTimeout(() => {
      //  setNotification(null)
      //}, 5000)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>
      {user === null ? (
        <LoginForm handleLogIn = {handleLogIn} />
      ) : (
        <>
          <h1>Blogs</h1>
          <Notification />
          <h2>{user.username} Logged in</h2>
          <button onClick={handleLogOut} id = "logout">LogOut</button>
          <Togglable buttonLabel="Create New Blog"  ref = {blogFormRef}>
            <BlogForm createNewBlog={handleCreateNewBlog} />
          </Togglable>
          <BlogList updateBlog = {updateBlog} blogs = {blogs} user = {user} deleteBlog = {deleteBlog}/>
        </>
      )}
    </div>
  )
}

export default App
