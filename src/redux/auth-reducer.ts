import { authAPI, profileAPI, securityAPI } from '../api/api'
import { stopSubmit } from 'redux-form'
import { PhotosType, ProfileType } from '../types/types'
import { getMyProfile } from './init-reducer'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from './store'

/* Action types */
const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const SET_CAPTCHA_URL = 'samurai-network/auth/SET_CAPTCHA_URL'
const SET_MY_PROFILE = 'samurai-network/auth/SET_MY_PROFILE'
const SET_MY_PHOTO = 'samurai-network/auth/SET_MY_PHOTO'

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null as string | null,
  myProfile: null as ProfileType | null,
}

type InitialStateType = typeof initialState

type ActionTypes =
  SetAuthUserDataActionType |
  GetCaptchaUrlSuccessType |
  SetMyProfileType |
  SetMyPhotoType

function authReducer (state = initialState, action: ActionTypes): InitialStateType {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }

    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      }

    case SET_MY_PROFILE:
      return {
        ...state,
        myProfile: action.profile,
      }

    case SET_MY_PHOTO:
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          photos: action.photos
        } as ProfileType,
      }

    default:
      return state
  }
}

/* Action creators */
type SetAuthUserDataActionPayloadType = { userId: number | null, email: string | null, login: string | null, isAuth: boolean };
type SetAuthUserDataActionType = { type: typeof SET_USER_DATA, payload: SetAuthUserDataActionPayloadType };
export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
): SetAuthUserDataActionType => (
  { type: SET_USER_DATA, payload: { userId, email, login, isAuth } }
)

type GetCaptchaUrlSuccessType = { type: typeof SET_CAPTCHA_URL, captchaUrl: string };
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({
  type: SET_CAPTCHA_URL,
  captchaUrl: captchaUrl,
})

type SetMyProfileType = { type: typeof SET_MY_PROFILE, profile: ProfileType }
export const setMyProfile = (profile: ProfileType): SetMyProfileType => ({
  type: SET_MY_PROFILE,
  profile,
})

export type SetMyPhotoType = { type: typeof SET_MY_PHOTO, photos: PhotosType }
export const setMyPhoto = (photos: PhotosType): SetMyPhotoType => ({
  type: SET_MY_PHOTO,
  photos,
})

/* Thunk creators */
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const saveMyProfile = (profile: ProfileType): ThunkType => {
  return async (dispatch) => {
    const response = await profileAPI.updateProfile(profile)
    if (response.resultCode === 0) {
      await dispatch(setMyProfile(profile))
    }
    else {
      // @ts-ignore
      dispatch(stopSubmit('edit-profile', { _error: response.messages[0] }))
      return Promise.reject()
    }

  }
}

export const getAuthUserData = (): ThunkType => {
  return async (dispatch) => {
    const meData = await authAPI.me()

    if (meData.resultCode === 0) {
      let { id, email, login } = meData.data
      dispatch(setAuthUserData(id, email, login, true))
    }
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
  return async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)

    if (data.resultCode === 0) {
      dispatch(getAuthUserData()).then(() => {
        dispatch(getMyProfile())
      })
    }
    else {
      // 10 - Captcha is required
      if (data.resultCode === 10) {
        await dispatch(getCaptchaUrl())
      }

      // @ts-ignore
      dispatch(stopSubmit('login', { _error: data.messages[0] }))
    }
  }
}

export const logout = (): ThunkType => {
  return async (dispatch) => {
    const response = await authAPI.logout()

    if (response.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  }
}

export const getCaptchaUrl = (): ThunkType => {
  return async (dispatch) => {
    const response = await securityAPI.getCaptcha()
    const captchaUrl = response.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
  }
}

export default authReducer
