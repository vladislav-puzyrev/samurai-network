import { authAPI, ResultCodesEnum, ResultCodesForCaptchaEnum, securityAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isFetching: false as boolean,
  isAuth: false as boolean,
  captchaUrl: null as string | null,
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

    default:
      return state
  }
}

// setAuthUserData
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

// getCaptchaUrlSuccess
type GetCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  captchaUrl: string
};

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  captchaUrl: captchaUrl,
})

// getAuthUserData
export const getAuthUserData = () => async (dispatch: any) => {
  const meData = await authAPI.me()

  if (meData.resultCode === ResultCodesEnum.Success) {
    let { id, email, login } = meData.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

// login
export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string,
) => async (dispatch: any) => {
  const data = await authAPI.login(email, password, rememberMe, captcha)

  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(getAuthUserData())
  }
  else {
    if (data.resultCode === ResultCodesForCaptchaEnum.CaptchaIsRequired) {
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

export default authReducer
