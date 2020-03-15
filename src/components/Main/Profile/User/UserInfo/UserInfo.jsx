import React, { useState } from 'react'
import styles from './UserInfo.module.css'
import Status from './Status/Status'
import ProfileDataForm from './ProfileDataForm/ProfileDataForm'
import ProfileData from './ProfileData/ProfileData'
import Button from '../../../../common/Button/Button'

function UserInfo ({ profile, status, isOwner, saveProfile, updateStatus }) {
  const [editMode, setEditMode] = useState(false)

  function onSubmit (formData) {
    saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }

  return (
    <div className={styles.info}>
      <div>
        <h1 className={styles.userName}>{profile.fullName}</h1>
        <Status status={status} updateStatus={updateStatus} isOwner={isOwner}/>

        {(status || isOwner) && <hr/>}

        {
          editMode ?
            <ProfileDataForm setEditMode={setEditMode} profile={profile} initialValues={profile} onSubmit={onSubmit}/> :
            <ProfileData isOwner={isOwner} profile={profile}/>
        }
      </div>

      {isOwner && !editMode && <div><Button onClick={() => { setEditMode(true) }}>Редактировать</Button></div>}
    </div>
  )
}

export default UserInfo
