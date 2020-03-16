import React, { useEffect } from 'react'
import {
  getStatus,
  getUsersProfile,
  savePhoto,
  saveProfile,
  updateStatus,
  setAvatarIsFetching
} from '../../../redux/profile-reducer'
import { saveMyProfile } from '../../../redux/auth-reducer'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { compose } from 'redux'
import { ProfileType } from '../../../types/types'
import User from './User/User'
import PostsContainer from './Posts/PostsContainer'
import { AppStateType } from '../../../redux/store'

type PathParamsType = {
  userID: string
}

type MapStatePropTypes = {
  userID: number | null
  profile: ProfileType | null
  status: string
  avatarIsFetching: boolean
  myProfile: ProfileType | null
}

type MapDispatchPropTypes = {
  getUsersProfile: (userID: number) => void
  getStatus: (userID: number) => void
  savePhoto: (photo: Blob) => void
  updateStatus: (newStatus: string) => void
  setAvatarIsFetching: (isFetching: boolean) => void
  saveProfile: (profile: ProfileType) => void
  saveMyProfile: (profile: ProfileType) => void
}

type PropTypes = RouteComponentProps<PathParamsType> & MapStatePropTypes & MapDispatchPropTypes

const Profile: React.FC<PropTypes> = ({
  savePhoto,
  profile,
  status,
  updateStatus,
  saveProfile,
  match,
  userID,
  history,
  getUsersProfile,
  getStatus,
  avatarIsFetching,
  setAvatarIsFetching,
  myProfile,
  saveMyProfile,
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
    <>
      <User
        savePhoto={savePhoto}
        profile={isOwner ? myProfile : profile}
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
        saveProfile={isOwner ? saveMyProfile : saveProfile}
        avatarIsFetching={avatarIsFetching}
        setAvatarIsFetching={setAvatarIsFetching}
      />
      <PostsContainer/>
    </>
  )
}

function mapStateToProps (state: AppStateType): MapStatePropTypes {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userID: state.auth.userId,
    avatarIsFetching: state.profilePage.avatarIsFetching,
    myProfile: state.auth.myProfile,
  }
}

export default compose(
  connect<MapStatePropTypes, MapDispatchPropTypes, unknown, AppStateType>(mapStateToProps, {
    getUsersProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
    setAvatarIsFetching,
    saveMyProfile,
  }),
  withRouter,
)(Profile)
