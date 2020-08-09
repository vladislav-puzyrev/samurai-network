import { FormAction, stopSubmit } from 'redux-form'
import { ActionsType } from './reducer'
import { setMyProfile, setAuthUserData, getCaptchaUrlSuccess } from './actions'
import { getMyProfile } from '../init/thunks'
import { BaseThunkType } from '../store'
import { ProfileType } from '../../types/types'

type ThunkType = BaseThunkType<ActionsType | FormAction, Promise<void>>

export const saveMyProfile = (profile: ProfileType): ThunkType => {
  return async (dispatch, getState, { profileAPI }) => {
    const response = await profileAPI.updateProfile(profile)
    if (response.resultCode === 0) {
      await dispatch(setMyProfile(profile))
    } else {
      dispatch(stopSubmit('edit-profile', { _error: response.messages[0] }))
    }
  }
}

export const getAuthUserData = (): ThunkType => {
  return async (dispatch, getState, { authAPI }) => {
    const meData = await authAPI.me()

    if (meData.resultCode === 0) {
      const { id, email, login } = meData.data
      dispatch(setAuthUserData(id, email, login, true))
    }
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
  return async (dispatch, getState, { authAPI }) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)

    if (data.resultCode === 0) {
      dispatch(getAuthUserData()).then(() => {
        dispatch(getMyProfile())
      })
    } else {
      // 10 - CaptchaType is required
      if (data.resultCode === 10) {
        await dispatch(getCaptchaUrl())
      }

      dispatch(stopSubmit('login', { _error: data.messages[0] }))
    }
  }
}

export const logout = (): ThunkType => {
  return async (dispatch, getState, { authAPI }) => {
    const response = await authAPI.logout()

    if (response.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  }
}

export const getCaptchaUrl = (): ThunkType => {
  return async (dispatch, getState, { securityAPI }) => {
    const response = await securityAPI.getCaptcha()
    const captchaUrl = response.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
  }
}
