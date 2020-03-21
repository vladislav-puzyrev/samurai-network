import React from 'react'
import styles from './ProfileData.module.css'
import { IProfile, IContacts } from '../../../../../../types/types'

type PropTypes = {
  profile: IProfile
}

const ProfileData: React.FC<PropTypes> = ({ profile }) => {
  const isContactsExists = Object.values(profile.contacts).some((contact) => (contact !== null))

  return (
    <dl className={styles.about}>
      <div>
        <dt>Ищу работу:</dt>
        <dd> {profile.lookingForAJob ? 'да' : 'нет'}</dd>
      </div>

      <div>
        <dt>Мои навыки:</dt>
        <dd> {profile.lookingForAJobDescription || 'нету'}</dd>
      </div>

      <div>
        <dt>Обо мне:</dt>
        <dd> {profile.aboutMe || 'не заполнено'}</dd>
      </div>

      {isContactsExists && <hr/>}

      {
        isContactsExists && (
          <div className={styles.contacts}>
            <dt>Мои контакты:</dt>
            <dd>
              <dl className={styles.contactsList}>
                {
                  Object.entries(profile.contacts).map((contact) => {
                    const key = contact[0] as keyof IContacts
                    const value = contact[1]

                    return (value) ? (
                      <div key={key}>
                        <dt>{key}:</dt>
                        <dd>
                          <a rel='noopener noreferrer' target='_blank' href={profile.contacts[key]}>
                            {profile.contacts[key]}
                          </a>
                        </dd>
                      </div>
                    ) : null
                  })
                }
              </dl>
            </dd>
          </div>
        )
      }
    </dl>
  )
}

export default React.memo(ProfileData)
