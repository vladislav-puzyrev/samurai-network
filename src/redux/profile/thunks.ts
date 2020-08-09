import { FormAction, stopSubmit } from 'redux-form'
import { ActionsType } from './reducer'
import { setUserProfile, setStatus, setProfilePhoto, setAvatarIsFetching } from './actions'
import { setMyPhoto } from '../auth/actions'
import { BaseThunkType } from '../store'
import { ProfileType } from '../../types/types'

type ThunkType = BaseThunkType<ActionsType | FormAction>

export const getUsersProfile = (userID: number | null): ThunkType => {
  return async (dispatch, getState, { profileAPI }) => {
    if (userID) {
      dispatch(setUserProfile(null))
      const response = await profileAPI.getProfile(userID)
      dispatch(setUserProfile(response))
    }
  }
}

export const getStatus = (userId: number): ThunkType => {
  return async (dispatch, getState, { profileAPI }) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
  }
}

export const updateStatus = (status: string): ThunkType => {
  return async (dispatch, getState, { profileAPI }) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
      dispatch(setStatus(status))
    }
  }
}

export const savePhoto = (file: File): ThunkType => {
  return async (dispatch, getState, { profileAPI }) => {
    const response = await profileAPI.updatePhoto(file)
    if (response.resultCode === 0) {
      dispatch(setProfilePhoto(response.data.photos))
      dispatch(setMyPhoto(response.data.photos))
      dispatch(setAvatarIsFetching(false))
    }
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => {
  return async (dispatch, getState, { profileAPI }) => {
    const response = await profileAPI.updateProfile(profile)
    if (response.resultCode === 0) {
      await dispatch(getUsersProfile(getState().auth.userId))
    } else {
      dispatch(stopSubmit('edit-profile', { _error: response.messages[0] }))
    }
  }
}
