import React, { useEffect } from 'react'
import {
  setAvatarIsFetching,
  addPost
} from '../../../redux/profile/actions'
import {
  getStatus,
  getUsersProfile,
  savePhoto,
  saveProfile,
  updateStatus
} from '../../../redux/profile/thunks'
import { connect } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'
import { saveMyProfile } from '../../../redux/auth/thunks'
import { PostType, ProfileType } from '../../../types/types'
import Posts from './Posts/Posts'
import { RootReducerType } from '../../../redux/store'
import User from './User/User'
import { follow, isFollowing, unfollow } from '../../../redux/users/thunks'

type MapStatePropTypes = {
  userID: number | null
  profile: ProfileType | null
  status: string
  avatarIsFetching: boolean
  myProfile: ProfileType | null
  isAuth: boolean
  followingInProgress: number[]
  isFollowingUser: boolean
  posts: PostType[]
}

type MapDispatchPropTypes = {
  getUsersProfile: (userID: number) => void
  getStatus: (userID: number) => void
  savePhoto: (photo: File) => void
  updateStatus: (newStatus: string) => void
  setAvatarIsFetching: (isFetching: boolean) => void
  saveProfile: (profile: ProfileType) => void
  saveMyProfile: (profile: ProfileType) => void
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  isFollowing: (userID: number) => void
  addPost: (formData: { newPost: string }) => void
}

const Profile: React.FC<MapStatePropTypes & MapDispatchPropTypes> = ({
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
  posts,
  addPost
}) => {
  const { userID: id } = useParams()

  const userURL = (id) ? +id : userID
  const isOwner = userID === userURL

  if (profile) document.title = profile.fullName

  useEffect(() => {
    if (userURL && isAuth) {
      isFollowing(+userURL)
    }
  }, [userURL, isFollowing, isAuth])

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
        userURL={userURL ? +userURL : null}
      />
      <Posts
        posts={posts}
        addPost={addPost}
      />
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
    posts: state.profile.posts
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
  addPost
})(Profile)
