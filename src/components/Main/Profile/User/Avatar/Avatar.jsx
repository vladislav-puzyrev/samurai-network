import React from 'react'
import styles from './Avatar.module.css'
import defaultAvatar from '../../../../../assets/images/defaultAvatar.png'
import Preloader from '../../../../common/Preloader/Preloader'
import { NavLink } from 'react-router-dom'
import Button from '../../../../common/Button/Button'

function Avatar ({
  isOwner,
  savePhoto,
  profile,
  setAvatarIsFetching,
  avatarIsFetching,
  follow,
  unfollow,
  followingInProgress,
  isFollowingUser,
  userURL,
}) {
  const uploadLabel = React.createRef()

  console.log(isFollowingUser)

  function onUploadPhoto (e) {
    if (e.target.files.length) {
      const photo = e.target.files[0]
      uploadLabel.current.textContent = photo.name
      setAvatarIsFetching(true)
      savePhoto(photo)
    }
  }

  const followingFetching = followingInProgress.some((id) => (id === userURL))

  const followUnfollow = () => {
    if (isFollowingUser) {
      unfollow(userURL)
    }
    else {
      follow(userURL)
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
      {
        !isOwner && <NavLink className={styles.sendMessage} to={`/messages/${profile.userId}`}>
          <Button width='100%'>Написать сообщение</Button>
        </NavLink>
      }
      {
        !isOwner && <Button margin='10px 0 0 0' disabled={followingFetching} width='100%' onClick={followUnfollow}>
          {isFollowingUser ? 'Отписаться ❌' : 'Подписаться ✅'}
        </Button>
      }
    </div>
  )
}

export default Avatar
