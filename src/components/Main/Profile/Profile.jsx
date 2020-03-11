import React from 'react'
import styles from './Profile.module.css'
import User from './User/User'
import PostsContainer from './Posts/PostsContainer'

function Profile (props) {
  return (
    <div className={styles.profile}>
      <User
        savePhoto={props.savePhoto}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        saveProfile={props.saveProfile}
      />
      <PostsContainer/>
    </div>
  )
}

export default Profile
