import React, { useRef, ChangeEvent } from 'react'
import styles from './Avatar.module.css'
import defaultAvatar from '../../../../../assets/defaultAvatar.png'
import Preloader from '../../../../common/Preloader/Preloader'
import { NavLink } from 'react-router-dom'
import Button from '../../../../common/Button/Button'
import { ProfileType } from '../../../../../types/types'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type PropTypes = {
  isOwner: boolean
  profile: ProfileType | null
  avatarIsFetching: boolean
  isFollowingUser: boolean
  followingInProgress: number[]
  userURL: number | null

  savePhoto: (photo: File) => void
  setAvatarIsFetching: (isFetching: boolean) => void
  follow: (userID: number) => void
  unfollow: (userID: number) => void
}

const Avatar: React.FC<PropTypes> = ({
  isOwner,
  savePhoto,
  profile,
  setAvatarIsFetching,
  avatarIsFetching,
  follow,
  unfollow,
  followingInProgress,
  isFollowingUser,
  userURL
}) => {
  const uploadLabel = useRef<HTMLLabelElement>(null)

  function onUploadPhoto (e: ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement
    const photo: File = (target.files as FileList)[0]

    if (photo && photo.type && uploadLabel.current) {
      if (photo.type !== 'image/png' && photo.type !== 'image/jpeg') {
        uploadLabel.current.textContent = 'Не верный тип файла…'
      } else {
        uploadLabel.current.textContent = photo.name.length > 20 ? photo.name.slice(0, 20) + '…' : photo.name
        setAvatarIsFetching(true)
        savePhoto(photo)
      }
    }
  }

  const followingFetching = followingInProgress.some((id) => (id === userURL))

  const followUnfollow = () => {
    if (userURL) {
      if (isFollowingUser) {
        unfollow(userURL)
      } else {
        follow(userURL)
      }
    }
  }

  return (
    <div className={styles.avatar}>
      <div className={styles.avatarWrapper}>
        {
          avatarIsFetching || !profile ? <Preloader stretch/> : (
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
        !isOwner && <NavLink className={styles.sendMessage} to={`/messages/${userURL}`}>
          <Button style={{ width: '100%' }}>Написать сообщение</Button>
        </NavLink>
      }

      {
        !isOwner &&
        <Button
          style={{ width: '100%', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          disabled={followingFetching}
          onClick={followUnfollow}
        >
          {
            isFollowingUser ? (
              <span>
                <span className={styles.buttonText}>Отписаться</span>
                <FontAwesomeIcon color='#f03a17' icon={faTimes}/>
              </span>
            ) : (
              <span>
                <span className={styles.buttonText}>Подписаться</span>
                <FontAwesomeIcon color='#16c60c' icon={faCheck}/>
              </span>
            )
          }
        </Button>
      }
    </div>
  )
}

export default React.memo(Avatar)
