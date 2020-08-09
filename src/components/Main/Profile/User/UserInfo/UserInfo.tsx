import React, { useState } from 'react'
import styles from './UserInfo.module.css'
import Status from './Status/Status'
import ProfileDataForm from './ProfileDataForm/ProfileDataForm'
import ProfileData from './ProfileData/ProfileData'
import Button from '../../../../common/Button/Button'
import { ProfileType } from '../../../../../types/types'

type PropTypes = {
  profile: ProfileType
  status: string
  isOwner: boolean

  updateStatus: (newStatus: string) => void
  saveProfile: (profile: ProfileType) => void
}

const UserInfo: React.FC<PropTypes> = ({ profile, status, isOwner, saveProfile, updateStatus }) => {
  const [editMode, setEditMode] = useState(false)

  async function onSubmit (formData: ProfileType) {
    await saveProfile(formData)
    setEditMode(false)
  }

  return (
    <div className={styles.info}>
      <div>
        <h1 className={styles.userName}>{profile.fullName}</h1>
        <Status status={status} updateStatus={updateStatus} isOwner={isOwner}/>

        {(status || isOwner) && <hr/>}

        {
          editMode
            ? <ProfileDataForm setEditMode={setEditMode} profile={profile} initialValues={profile} onSubmit={onSubmit}/>
            : <ProfileData profile={profile}/>
        }
      </div>

      {isOwner && !editMode && <div><Button onClick={() => { setEditMode(true) }}>Редактировать</Button></div>}
    </div>
  )
}

export default React.memo(UserInfo)
