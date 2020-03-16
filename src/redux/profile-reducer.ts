import { profileAPI } from '../api/api'
import { stopSubmit } from 'redux-form'
import { PhotosType, PostType, ProfileType } from '../types/types'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from './store'
import { setMyPhoto, SetMyPhotoType } from './auth-reducer'

/* Action types */
const ADD_POST = 'samurai-network/profile/ADD_POST'
const SET_USER_PROFILE = 'samurai-network/profile/SET_USER_PROFILE'
const SET_STATUS = 'samurai-network/profile/SET_STATUS'
const SET_PROFILE_PHOTO = 'samurai-network/profile/SET_PROFILE_PHOTO'
const SET_AVATAR_FETCHING = 'samurai-network/profile/SET_AVATAR_FETCHING'

const initialState = {
  posts: [
    { id: 1, text: 'Вам нравится React?', likes: 4 },
    { id: 2, text: 'hey', likes: 2 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  avatarIsFetching: false,
}

type InitialStateType = typeof initialState

type ActionTypes =
  AddPostActionType |
  SetUserProfileActionType |
  SetStatusActionType |
  setProfilePhotoActionType |
  setAvatarIsFetchingActionType |
  SetMyPhotoType

function profileReducer (state = initialState, action: ActionTypes): InitialStateType {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts[state.posts.length - 1].id + 1,
        text: action.text,
        likes: 0,
      }

      return {
        ...state,
        posts: [...state.posts, newPost],
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      }

    case SET_PROFILE_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      }

    case SET_AVATAR_FETCHING:
      return {
        ...state,
        avatarIsFetching: action.isFetching
      }

    default:
      return state
  }
}

/* Action creators */
type AddPostActionType = { type: typeof ADD_POST, text: string }
export const addPost = (formData: { newPost: string }): AddPostActionType => ({
  type: ADD_POST,
  text: formData.newPost
})

type SetUserProfileActionType = { type: typeof SET_USER_PROFILE, profile: ProfileType | null }
export const setUserProfile = (profile: ProfileType | null): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile: profile
})

type SetStatusActionType = { type: typeof SET_STATUS, status: string }
export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status: status
})

type setProfilePhotoActionType = { type: typeof SET_PROFILE_PHOTO, photos: PhotosType }
export const setProfilePhoto = (photos: PhotosType): setProfilePhotoActionType => ({
  type: SET_PROFILE_PHOTO,
  photos: photos
})

type setAvatarIsFetchingActionType = { type: typeof SET_AVATAR_FETCHING, isFetching: boolean }
export const setAvatarIsFetching = (isFetching: boolean): setAvatarIsFetchingActionType => ({
  type: SET_AVATAR_FETCHING,
  isFetching
})

/* Thunk creators */
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const getUsersProfile = (userID: number | null): ThunkType => {
  return async (dispatch) => {
    if (userID) {
      dispatch(setUserProfile(null))
      const response = await profileAPI.getProfile(userID)
      dispatch(setUserProfile(response))
    }
  }
}

export const getStatus = (userId: number): ThunkType => {
  return async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
  }
}

export const updateStatus = (status: string): ThunkType => {
  return async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
      dispatch(setStatus(status))
    }
  }
}

export const savePhoto = (file: any): ThunkType => {
  return async (dispatch) => {
    const response = await profileAPI.updatePhoto(file)
    if (response.resultCode === 0) {
      dispatch(setProfilePhoto(response.data.photos))
      dispatch(setMyPhoto(response.data.photos))
      dispatch(setAvatarIsFetching(false))
    }
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => {
  return async (dispatch, getState) => {
    const response = await profileAPI.updateProfile(profile)
    if (response.resultCode === 0) {
      await dispatch(getUsersProfile(getState().auth.userId))
    }
    else {
      // @ts-ignore
      dispatch(stopSubmit('edit-profile', { _error: response.messages[0] }))
      return Promise.reject()
    }
  }
}

export default profileReducer
