import React from 'react'
import Preloader from '../../../common/Preloader/Preloader'
import Avatar from './Avatar/Avatar'
import UserInfo from './UserInfo/UserInfo'

function User ({
  profile, savePhoto, status, updateStatus, isOwner, saveProfile, avatarIsFetching, setAvatarIsFetching
}) {

  if (!profile) {
    return <Preloader/>
  }

  return (
    <div style={{ display: 'flex' }}>
      <Avatar
        savePhoto={savePhoto}
        profile={profile}
        isOwner={isOwner}
        avatarIsFetching={avatarIsFetching}
        setAvatarIsFetching={setAvatarIsFetching}
      />

      <UserInfo
        status={status}
        updateStatus={updateStatus}
        saveProfile={saveProfile}
        profile={profile}
        isOwner={isOwner}
      />
    </div>
  )
}

export default User
