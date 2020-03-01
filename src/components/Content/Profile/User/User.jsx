import React, { useState } from 'react'
import styles from './User.module.css'
import Preloader from '../../../common/Preloader/Preloader'
import Status from './Status/StatusHooks'
import defaultAvatar from '../../../../assets/images/defaultAvatar.png'
import ProfileDataForm from './ProfileDataForm'

function User ({ profile, savePhoto, status, updateStatus, isOwner, saveProfile }) {
  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader/>
  }

  function onMainPhotoSelected (e) {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  function onSubmit (formData) {
    saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }

  return (
    <div className={styles.user}>
      <img className={styles.avatar}
           src={profile.photos.large || defaultAvatar} alt="avatar"/>
      <div className={styles.info}>
        <h1 className={styles.name}>
          {profile && profile.fullName}
        </h1>
        <Status status={status} updateStatus={updateStatus}/>
        {editMode ?
          <ProfileDataForm profile={profile} initialValues={profile}
                           onSubmit={onSubmit}/> :
          <ProfileData goToEditMode={() => {setEditMode(true)}}
                       isOwner={isOwner} profile={profile}/>}
        {isOwner && <input onChange={onMainPhotoSelected} type='file'
                           style={{ 'color': 'white' }}/>}
      </div>
    </div>
  )
}

function Contact ({ contactTitle, contactValue }) {
  return <li>{contactTitle}: {contactValue}</li>
}

function ProfileData ({ profile, isOwner, goToEditMode }) {
  return (
    <>
      {isOwner && <button onClick={goToEditMode}>Редактировать</button>}
      <ul className={styles.about}>
        <li>Ищу работу: {profile.lookingForAJob ? 'да' : 'нет'}</li>
        {profile.lookingForAJob && <li>Мои профессиональные
          навыки: {profile.lookingForAJobDescription}</li>}
        {profile.aboutMe && <li>Обо мне: {profile.aboutMe}</li>}
        <li className={styles.contLI}>
          Мои контакты:
          <ul className={styles.contacts}>
            {Object.keys(profile.contacts).map((key) =>
              <Contact key={key} contactTitle={key}
                       contactValue={profile.contacts[key]}/>,
            )}
          </ul>
        </li>
      </ul>
    </>
  )
}

export default User