import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render,fireEvent } from '@testing-library/react'
import Blog from './Blog'

describe('renders content by default',() => {
  let component
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

  beforeEach(() => {
    component = render(
      <Blog blog = {blog}  user = {blog.user}  />
    )
  })

  test('renders title',() => {
    //check if title is visible
    expect(component.container).toHaveTextContent(blog.title)
  })

  test('renders author',() => {
    //check if author is visible
    expect(component.container).toHaveTextContent(blog.author)
  })

  test('url and likes are not renders by default',() => {
    //check if url is not visible
    expect(component.container).not.toHaveTextContent(blog.url)
    //check if number of likes is not visible
    expect(component.container).not.toHaveTextContent(blog.likes)
  })

  test('blogDetails is not render by default',() => {
    const blogDetailsToStart = component.container.querySelector('.blogDetails')
    expect(blogDetailsToStart).toBe(null)
  })
})

describe('clicking the button, blog details is rendered',() => {
  let component

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

  beforeEach(() => {
    component = render(
      <Blog blog = {blog}  user = {blog.user}  />
    )

    const button = component.getByText('view')
    fireEvent.click(button)
  })

  test('blogDetails component is rendered',() => {
    const div = component.container.querySelector('.blogDetails')
    expect(div).toBeDefined()
  })
  test('url and likes are rendered',() => {
    //check if url is visible
    const urlElement = component.getByText(blog.url)
    expect(urlElement).toBeDefined()
    //check if number of likes is visible
    const likesElement = component.getByText(`likes ${blog.likes}`)
    expect(likesElement).toBeDefined()
  })
})

describe('blog buttons functionality ',() => {
  const mockHandleLike = jest.fn()
  let component

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

  beforeEach(() => {
    component = render(
      <Blog blog = {blog}  user = {blog.user} updateBlog = {mockHandleLike} />
    )

    const button = component.getByText('view')
    fireEvent.click(button)
  })

  test('like button',() => {
    const button = component.getByText('Like')
    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandleLike.mock.calls).toHaveLength(2)
  })
})