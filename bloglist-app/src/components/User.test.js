import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import User from './User'

describe('renders content by default',() => {
  let component
  const user = {
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
  beforeEach(() => {
    component = render(
      <User user = {user} />
    )
  })

  test('render user name',() => {
    //component.debug()
    const element = component.getByText('Dionisio')

    expect(element).toBeDefined()
  })

  test('render number of blogs', () => {
    const element = component.getByText('1')

    expect(element).toBeDefined()
  })
})