import * as actions from './actions'
import * as constants from './constants'
import { InferValueTypes } from '../store'
import { ProfileType } from '../../types/types'

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null as string | null,
  myProfile: null as ProfileType | null
}

export type InitialStateType = typeof initialState
export type ActionsType = ReturnType<InferValueTypes<typeof actions>>

function reducer (state = initialState, action: ActionsType): InitialStateType {
  switch (action.type) {
    case constants.SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }

    case constants.SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl
      }

    case constants.SET_MY_PROFILE:
      return {
        ...state,
        myProfile: action.profile
      }

    case constants.SET_MY_PHOTO:
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          photos: action.photos
        } as ProfileType
      }

    default:
      return state
  }
}

export default reducer
