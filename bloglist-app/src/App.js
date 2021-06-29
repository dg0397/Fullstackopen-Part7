import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route , Switch } from 'react-router-dom'

//import { setMessage } from './reducers/notificationReducer'

//import blogService from './services/blogs'
//import loginService from './services/login'
//import userServices from './services/users'

import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'

import './App.css'
import { addBlog, likeBlog, deleteOneBlog } from './reducers/blogReducer'
import { login, localStorageLogin, logout } from './reducers/loginReducer'
import UserList from './components/UserList'
import UserView from './components/UserView'


const App = () => {
  const user = useSelector(state => state.user)

  const blogFormRef = useRef()
  const dispatch = useDispatch()


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      dispatch(localStorageLogin(loggedUserJSON))
      //const user = JSON.parse(loggedUserJSON)
      //setUser(user)
      //blogService.setToken(user.token)
    }
  }, [])

  const handleLogIn = async (userData) => {
    dispatch(login(userData))

    //try {
    //  //const user = await loginService.getLogin(userData)
    //  //dispatch(setMessage(`Welcome ${user.name}`,5))
    //  //setNotification(`Welcome ${user.name}`)
    //  //setTimeout(() => {
    //  //  setNotification(null)
    //  //}, 5000)
    //  //window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
    //  //blogService.setToken(user.token)
    //  //setUser(user)
    //} catch (error) {
    //  console.log(error)
    //  dispatch(setMessage('Error: Wrong username or password',5))
    //  //setNotification('Error: Wrong username or password')
    //  //setTimeout(() => {
    //  //  setNotification(null)
    //  //}, 5000)
    //}
  }
  const handleLogOut = () => {
    dispatch(logout())
    //window.localStorage.clear()
    //setUser(null)
  }
  const handleCreateNewBlog = async (blog) => {
    try {
      blogFormRef.current.toggleVisibility()
      dispatch(addBlog(blog))
      //const newBlog = await blogService.create(blog)
      //setBlogs(blogs.concat(newBlog))
      //dispatch(setMessage(`Added new Blog: ${newBlog.title}`,5))

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
      dispatch(likeBlog(blog))
      //const updatedBlog = await blogService.update(blog)
      //setBlogs(blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog))
      //dispatch(setMessage(`Updated Blog: ${updatedBlog.title}`,5))

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
      dispatch(deleteOneBlog(blogToDelete))
      //await blogService.deleteBlog(blogToDelete.id)
      //setBlogs(blogs.filter(blog => blog.id !== blogToDelete.id))
      //dispatch(setMessage(`Deleted Blog: ${blogToDelete.title}`,5))

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
          <Switch>
            <Route path = '/users/:id'>
              <UserView />
            </Route>
            <Route path = "/users">
              <UserList/>
            </Route>
            <Route path = "/blogs">
              <Togglable buttonLabel="Create New Blog"  ref = {blogFormRef}>
                <BlogForm createNewBlog={handleCreateNewBlog} />
              </Togglable>
              <BlogList updateBlog = {updateBlog} user = {user} deleteBlog = {deleteBlog}/>
            </Route>
          </Switch>
        </>
      )}
    </div>
  )
}

export default App
