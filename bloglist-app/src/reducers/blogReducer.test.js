import blogReducer from './blogReducer'
import deepFreeze from 'deep-freeze'

describe('blogReducer',() => {
  test('should return a proper initial state when called with undefined state', () => {
    const state = []
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = blogReducer(undefined, action)
    expect(newState).toEqual(state)
  })
  test('a blog can be added',() => {
    const state = []
    const blog = {
      'author': 'dg0397',
      'likes': 35,
      'title': 'Learning GraphQL',
      'url': 'leargrapgql.com',
      'user': {
        'username': 'dg0397',
        'name': 'Dionisio',
        'id': '6058e0392a3fc348a4bf8586'
      },
      'id': '605b74bcf0e9ae4a709879db'
    }

    const action = {
      type : 'ADD',
      data : blog
    }

    deepFreeze(state)
    const newState = blogReducer(state,action)
    expect(newState).toHaveLength(state.length + 1)
    expect(newState).toContainEqual(action.data)
  })
})