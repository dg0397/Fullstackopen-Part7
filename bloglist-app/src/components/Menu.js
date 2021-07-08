import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../reducers/loginReducer'


const Menu = ({ user }) => {
  const dispatch = useDispatch()

  //const menuStyle = {
  //  display : 'flex',
  //  alignItems:'center',
  //  justifyContent:'space-around',
  //  backgroundColor:'aliceblue',
  //  paddingTop: 10,
  //  paddingLeft: 2,
  //  border: 'solid',
  //  borderWidth: 1,
  //  marginBottom: 5
  //}

  const handleLogOut = () => {
    dispatch(logout())
    //window.localStorage.clear()
    //setUser(null)
  }
  return (
    <div id = 'menu'>
      <Link to = "/">Blogs</Link>
      <Link to = "/users">Users</Link>
      <p>{user.username} Logged in</p>
      <button onClick={handleLogOut} id = "logout">LogOut</button>
    </div>
  )
}

export default Menu