import usersReducer from './usersReducer'
import deepFreeze from 'deep-freeze'

describe('usersReducer',() => {
  const users = [
    {
      'blogs': [
        {
          'author': 'master',
          'title': 'Learning React-TypeScript',
          'url': 'leartypescript.com',
          'id': '605e16dd1f660c1ae8ed7f6a'
        },
        {
          'author': 'master',
          'title': 'Learning React-TypeScript2',
          'url': 'leartypescript.com',
          'id': '605e173d1f660c1ae8ed7f6b'
        }
      ],
      'username': 'rootMaster',
      'name': 'master',
      'id': '605b7e8517d2b834505935bb'
    },
    {
      'blogs': [
        {
          'author': 'master',
          'title': 'Learning MongoDB',
          'url': 'learmongodb.com',
          'id': '605b7668fe40212fa45c2a79'
        }
      ],
      'username': 'dg0397',
      'name': 'Dionisio',
      'id': '6058b273d24e973f6c7f887b'
    }
  ]
  test('should return a proper initial state when called with undefined state', () => {
    const state = []
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = usersReducer(undefined, action)
    expect(newState).toEqual(state)
  })
  test('initializing users data',() => {
    const state = []
    const action = {
      type: 'INIT_USERS',
      data: users
    }
    deepFreeze(state)
    const newState = usersReducer(state,action)
    expect(newState).toEqual(users)
  })
})


