import { createStore, combineReducers , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import loginReducer from './reducers/loginReducer'
import usersReducer from './reducers/usersReducer'

const reducer = combineReducers({
  message : notificationReducer,
  blogs : blogReducer,
  user : loginReducer,
  users : usersReducer
})

const store = createStore(reducer , composeWithDevTools(applyMiddleware(thunk)))

export default store