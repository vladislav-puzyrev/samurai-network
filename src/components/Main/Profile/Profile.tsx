import React, { useEffect } from 'react'
import {
  getStatus,
  getUsersProfile,
  savePhoto,
  saveProfile,
  updateStatus
} from '../../../redux/profile-reducer'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { compose } from 'redux'
import { ProfileType } from '../../../types/AppTypes'
import User from './User/User'
import PostsContainer from './Posts/PostsContainer'
import styles from './Profile.module.css'
import { AppStateType } from '../../../redux/store'

type PathParamsType = {
  userID: string
}

type MapStatePropTypes = {
  userID: number | null
  profile: ProfileType | null
  status: string
}

type MapDispatchPropTypes = {
  getUsersProfile: (userID: number) => void
  getStatus: (userID: number) => void
  savePhoto: (photo: Blob) => void
  updateStatus: (newStatus: string) => void
  saveProfile: (profile: ProfileType) => void
}

type PropTypes = RouteComponentProps<PathParamsType> & MapStatePropTypes & MapDispatchPropTypes

const Profile: React.FC<PropTypes> = ({
  savePhoto, profile, status, updateStatus, saveProfile, match, userID, history, getUsersProfile, getStatus
}) => {

  const userURL = +match.params.userID || userID || +history.push('/login')
  const isOwner = userID === userURL

  useEffect(() => {
    const updateProfile = () => {
      if (userURL) {
        getUsersProfile(userURL)
        getStatus(userURL)
      }
    }

    updateProfile()
  }, [userURL, getUsersProfile, getStatus])

  return (
    <div className={styles.profile}>
      <User
        savePhoto={savePhoto}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
        saveProfile={saveProfile}
      />
      <PostsContainer/>
    </div>
  )
}

function mapStateToProps (state: AppStateType): MapStatePropTypes {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userID: state.auth.userId
  }
}

export default compose(
  connect<MapStatePropTypes, MapDispatchPropTypes, unknown, AppStateType>(mapStateToProps, {
    getUsersProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
)(Profile)
