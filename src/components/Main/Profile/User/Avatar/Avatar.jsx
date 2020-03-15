import React from 'react'
import styles from './Avatar.module.css'
import defaultAvatar from '../../../../../assets/images/defaultAvatar.png'
import Preloader from '../../../../common/Preloader/Preloader'

function Avatar ({ isOwner, savePhoto, profile, setAvatarIsFetching, avatarIsFetching }) {
  const uploadLabel = React.createRef()

  function onUploadPhoto (e) {
    if (e.target.files.length) {
      const photo = e.target.files[0]
      uploadLabel.current.textContent = photo.name
      setAvatarIsFetching(true)
      savePhoto(photo)
    }
  }

  return (
    <div className={styles.avatar}>
      <div className={styles.avatarWrapper}>
        {
          avatarIsFetching ? <Preloader/> : (
            <img
              className={styles.avatarIMG}
              src={profile.photos.large || defaultAvatar} alt='avatar'
            />
          )
        }
      </div>
      {
        isOwner &&
        <div className={styles.upload}>
          <input className={styles.uploadInput} onChange={onUploadPhoto} type='file' id='UserPhotoUpload'/>
          <label
            ref={uploadLabel}
            className={styles.uploadLabel}
            htmlFor='UserPhotoUpload'
          >
            Обновить фотографию
          </label>
        </div>
      }
    </div>
  )
}

export default Avatar
