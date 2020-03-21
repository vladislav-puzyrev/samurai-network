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
import { IProfile } from '../../../types/types'
import PostsContainer from './Posts/PostsContainer'
import { RootReducerType } from '../../../redux/store'
import User from './User/User'
import { follow, isFollowing, unfollow } from '../../../redux/users-reducer'

type MapStatePropTypes = {
  userID: number | null
  profile: IProfile | null
  status: string
  avatarIsFetching: boolean
  myProfile: IProfile | null
  isAuth: boolean
  followingInProgress: Array<number>
  isFollowingUser: boolean
}

type MapDispatchPropTypes = {
  getUsersProfile: (userID: number) => void
  getStatus: (userID: number) => void
  savePhoto: (photo: File) => void
  updateStatus: (newStatus: string) => void
  setAvatarIsFetching: (isFetching: boolean) => void
  saveProfile: (profile: IProfile) => void
  saveMyProfile: (profile: IProfile) => void
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

function mapStateToProps (state: RootReducerType): MapStatePropTypes {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
    userID: state.auth.userId,
    avatarIsFetching: state.profile.avatarIsFetching,
    myProfile: state.auth.myProfile,
    isAuth: state.auth.isAuth,
    followingInProgress: state.users.followingInProgress,
    isFollowingUser: state.users.isFollowingUser,
  }
}

export default connect<MapStatePropTypes, MapDispatchPropTypes, unknown, RootReducerType>(mapStateToProps, {
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
