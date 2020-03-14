import { authAPI, profileAPI, securityAPI } from '../api/api'
import { stopSubmit } from 'redux-form'
import { ProfileType } from '../types/AppTypes'

/* Action types */
const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'
const SET_MY_PROFILE = 'samurai-network/auth/SET_MY_PROFILE'

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isFetching: false as boolean,
  isAuth: false as boolean,
  captchaUrl: null as string | null,
  myProfile: null as ProfileType | null,
}

export type InitialStateType = typeof initialState;

function authReducer (state = initialState, action: any): InitialStateType {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }

    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      }

    case SET_MY_PROFILE:
      return {
        ...state,
        myProfile: action.profile,
      }

    default:
      return state
  }
}

/* Action creators */
type SetAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
};

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayloadType
};

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
): SetAuthUserDataActionType => (
  { type: SET_USER_DATA, payload: { userId, email, login, isAuth } }
)

type GetCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  captchaUrl: string
};

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  captchaUrl: captchaUrl,
})

type SetMyProfileType = {
  type: typeof SET_MY_PROFILE
  profile: ProfileType
}

export const setMyProfile = (profile: ProfileType): SetMyProfileType => ({
  type: SET_MY_PROFILE,
  profile,
})

/* Thunk creators */
export const getAuthUserData = () => async (dispatch: any) => {
  const meData = await authAPI.me()

  if (meData.resultCode === 0) {
    let { id, email, login } = meData.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string,
) => async (dispatch: any) => {
  const data = await authAPI.login(email, password, rememberMe, captcha)

  if (data.resultCode === 0) {
    dispatch(getAuthUserData())
  }
  else {
    // 10 - Captcha is required
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }

    dispatch(stopSubmit(
      'login',
      { _error: data.messages[0] },
    ))
  }
}

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout()

  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptcha()
  const captchaUrl = response.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const getMyProfile = (myID: number) => async (dispatch: any) => {
  const response = await profileAPI.getProfile(myID)
  dispatch(setMyProfile(response))
}

export default authReducer
