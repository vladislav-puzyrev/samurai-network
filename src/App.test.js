import React from 'react'
import ReactDOM from 'react-dom'
// import {render} from '@testing-library/react';
import AppContainer from './App'

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Рендер без ошибок AppContainer', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AppContainer/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
