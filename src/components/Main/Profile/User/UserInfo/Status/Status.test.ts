import React from 'react'
import Status from './Status'
import { create } from 'react-test-renderer'

describe('ProfileData component', () => {
  test('статус из пропсов поступает в стейт', () => {
    // @ts-ignore
    // const component = create(<Status status = 'REACT!!!' / >)
    // const instance = component.getInstance()
    // expect(instance.state.status).toBe('REACT!!!')
  })

  // test('нету спана при создании', () => {
  //     const component = create(<ProfileData status='REACT!!!'/>);
  //     const root = component.root;
  //     let span = root.findByType('div');
  //     expect(span).toBe(undefined);
  // });
})
