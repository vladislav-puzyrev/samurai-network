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
import { follow, isFollowing, unfollow } from '../../../redux/users-reducer'

type MapStatePropTypes = {
  userID: number | null
  profile: ProfileType | null
  status: string
  avatarIsFetching: boolean
  myProfile: ProfileType | null
  isAuth: boolean
  followingInProgress: Array<number>
  isFollowingUser: boolean
}

type MapDispatchPropTypes = {
  getUsersProfile: (userID: number) => void
  getStatus: (userID: number) => void
  savePhoto: (photo: Blob) => void
  updateStatus: (newStatus: string) => void
  setAvatarIsFetching: (isFetching: boolean) => void
  saveProfile: (profile: ProfileType) => void
  saveMyProfile: (profile: ProfileType) => void
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  isFollowing: (userID: number) => void
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
  isAuth,
  follow,
  unfollow,
  followingInProgress,
  isFollowing,
  isFollowingUser,
}) => {

  const { userID: id } = useParams()

  const userURL = (id) ? +id : userID
  const isOwner = userID === userURL

  useEffect(() => {
    if (userURL) {
      isFollowing(+userURL)
    }
  }, [userURL, isFollowing])

  useEffect(() => {
    const updateProfile = () => {
      if (userURL) {
        getUsersProfile(userURL)
        getStatus(userURL)
      }
    }

    updateProfile()
  }, [userURL, getUsersProfile, getStatus])

  if (!isAuth) {
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
        follow={follow}
        unfollow={unfollow}
        followingInProgress={followingInProgress}
        isFollowingUser={isFollowingUser}
        userURL={userURL}
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
    isAuth: state.auth.isAuth,
    followingInProgress: state.usersPage.followingInProgress,
    isFollowingUser: state.usersPage.isFollowingUser,
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
  follow,
  unfollow,
  isFollowing,
})(Profile)
