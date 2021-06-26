import loginReducer from './loginReducer'
//import deepFreeze from 'deep-freeze'

describe('loginReducer',() => {
  const user = {
    'username': 'dgMaster',
    'name': 'master dg',
    'token':''
  }
  test('should return a proper initial state when called with undefined state', () => {
    const state = null
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = loginReducer(undefined, action)
    expect(newState).toEqual(state)
  })
  test('login an user',() => {
    const state = null
    const action = {
      type:'LOGIN',
      data : user
    }

    //deepFreeze(state)
    const newState = loginReducer(state, action)
    expect(newState).toEqual(action.data)
  })
  test('logout an user',() => {
    const state = user
    const action = {
      type : 'LOGOUT'
    }
    //deepFreeze(state)
    const newState = loginReducer(state,action)
    expect(newState).toEqual(null)
  })
})