import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(<App/>)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

test('Рендер без ошибок App', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
