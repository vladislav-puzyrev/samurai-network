import React, { useEffect } from 'react'
import {
  getStatus,
  getUsersProfile,
  savePhoto,
  saveProfile,
  updateStatus,
  setAvatarIsFetching
} from '../../../redux/profile-reducer'
import { connect } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'
import { saveMyProfile } from '../../../redux/auth-reducer'
import { ProfileType } from '../../../types/types'
import PostsContainer from './Posts/PostsContainer'
import { AppStateType } from '../../../redux/store'
import User from './User/User'

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

type PropTypes = MapStatePropTypes & MapDispatchPropTypes

const Profile: React.FC<PropTypes> = ({
  savePhoto,
  profile,
  status,
  updateStatus,
  saveProfile,
  userID,
  getUsersProfile,
  getStatus,
  avatarIsFetching,
  setAvatarIsFetching,
  myProfile,
  saveMyProfile,
}) => {

  const { userID: id } = useParams()

  const userURL = (id) ? +id : userID
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

  if (!userURL) {
    return <Redirect to='/login'/>
  }

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

export default connect<MapStatePropTypes, MapDispatchPropTypes, unknown, AppStateType>(mapStateToProps, {
  getUsersProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
  setAvatarIsFetching,
  saveMyProfile,
})(Profile)
