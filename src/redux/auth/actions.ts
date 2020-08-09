import * as constants from './constants'
import { PhotosType, ProfileType } from '../../types/types'

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) => ({
  type: constants.SET_USER_DATA,
  payload: { userId, email, login, isAuth }
})

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
  type: constants.SET_CAPTCHA_URL,
  captchaUrl: captchaUrl
})

export const setMyProfile = (profile: ProfileType) => ({
  type: constants.SET_MY_PROFILE,
  profile
})

export const setMyPhoto = (photos: PhotosType) => ({
  type: constants.SET_MY_PHOTO,
  photos
})
