import loginService from '../services/login'
import blogServices from '../services/blogs'

import { setMessage } from './notificationReducer'


const userReducer = (state = null ,action) => {
  switch(action.type){
  case 'LOGIN':{
    return { ...action.data }
  }
  case 'LOGOUT':{
    return null
  }
  default:{
    return state
  }
  }
}

export const login = (userData) => {
  return async dispatch => {
    try {
      const user = await loginService.getLogin(userData)
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
      blogServices.setToken(user.token)
      dispatch({
        type: 'LOGIN',
        data : user
      })
      dispatch(setMessage(`Welcome ${user.name}`,5))
    } catch (error) {
      console.log(error)
      dispatch(setMessage('Error: Wrong username or password',5))
    }

  }
}

export const localStorageLogin = (loggedUserJSON) => {
  return dispatch => {
    const user = JSON.parse(loggedUserJSON)
    blogServices.setToken(user.token)
    dispatch({
      type: 'LOGIN',
      data : user
    })
  }
}

export const logout = () => {
  return dispatch => {
    window.localStorage.clear()
    dispatch({
      type: 'LOGOUT'
    })
  }
}

export default userReducer