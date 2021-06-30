//import { useEffect } from 'react'
import { useSelector } from 'react-redux'
//import { initializeUsers } from '../reducers/usersReducer'


export const useUsersData = (id) => {
  //console.log(id)
  //const dispatch = useDispatch()
  //useEffect(() => {
  //  dispatch(initializeUsers())
  //}, [])
  const user = useSelector( state => state.users.find(blog => blog.id === id))
  return { user }
}

export const useBlogsData = (id) => {
  const blog = useSelector( state => state.blogs.find( blog => blog.id === id))
  return { blog }
}
