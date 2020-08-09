import { ActionsType } from './reducer'
import { setMyProfile } from '../auth/actions'
import { initializedSuccess } from './actions'
import { getAuthUserData } from '../auth/thunks'
import { BaseThunkType } from '../store'

type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof setMyProfile>, Promise<void>>

export const initializeApp = (): ThunkType => {
  return async (dispatch) => {
    dispatch(getAuthUserData()).then(() => {
      dispatch(getMyProfile()).then(() => {
        dispatch(initializedSuccess())
      })
    })
  }
}

export const getMyProfile = (): ThunkType => {
  return async (dispatch, getState, { profileAPI }) => {
    const isAuth = getState().auth.isAuth
    const userID = getState().auth.userId

    if (isAuth && userID) {
      const response = await profileAPI.getProfile(userID)
      dispatch(setMyProfile(response))
    }
  }
}
