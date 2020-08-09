import * as constants from './constants'
import { PhotosType, ProfileType } from '../../types/types'

export const addPost = (formData: { newPost: string }) => ({
  type: constants.ADD_POST,
  text: formData.newPost
})

export const setUserProfile = (profile: ProfileType | null) => ({
  type: constants.SET_USER_PROFILE,
  profile: profile
})

export const setStatus = (status: string) => ({
  type: constants.SET_STATUS,
  status: status
})

export const setProfilePhoto = (photos: PhotosType) => ({
  type: constants.SET_PROFILE_PHOTO,
  photos: photos
})

export const setAvatarIsFetching = (isFetching: boolean) => ({
  type: constants.SET_AVATAR_FETCHING,
  isFetching
})
