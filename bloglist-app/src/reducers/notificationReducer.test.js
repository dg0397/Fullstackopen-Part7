import notificationReducer from './notificationReducer'
import deepFreeze from 'deep-freeze'

describe('notificationReducer',() => {
  test('should return a proper initial state when called with undefined state', () => {
    const state = ''
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = notificationReducer(undefined, action)
    expect(newState).toEqual(state)
  })
  test('set a message',() => {
    const state = ''
    const message = 'This is a new Notification'
    const action  = {
      type : 'SET_MESSAGE',
      message
    }

    deepFreeze(state)
    const newState = notificationReducer(state,action)
    expect(newState).toEqual(message)
  })
})