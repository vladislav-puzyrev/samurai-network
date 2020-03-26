import React from 'react'
import TestRenderer from 'react-test-renderer'
import Status from './Status'
import ProfileData from '../ProfileData/ProfileData'
import { updateStatus } from '../../../../../../redux/profile-reducer'
import { IProfile } from '../../../../../../types/types'

describe('Status-component', () => {
  test('Статус из пропсов попадает в стейт', () => {
    const testRenderer = TestRenderer.create(<Status status='REACT!!!' updateStatus={updateStatus} isOwner={false}/>)
    const testInstance = testRenderer.root;
    console.log(testInstance.findByType('input'))

    expect(testInstance.findByType('input')).toBe('dasdasd');
    // expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);
  })

  test('нету спана при создании', () => {
    const profile: IProfile = {
      userId: 5,
      lookingForAJob: false,
      lookingForAJobDescription: 'dasdasdasdasdas',
      fullName: 'name surname',
      aboutMe: 'about',
      contacts: {
        github: 'string',
        vk: 'string',
        facebook: 'string',
        instagram: 'string',
        twitter: 'string',
        website: 'string',
        youtube: 'string',
        mainLink: 'string',
      },
      photos: {
        small: 'asdasd',
        large: 'asdasd'
      }
    }

    const component = TestRenderer.create(<ProfileData profile={profile}/>)
    const root = component.root
    let span = root.findByType('div')
    expect(span).toBe(undefined)
  })
})
