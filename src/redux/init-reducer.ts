import { getAuthUserData, setMyProfile, SetMyProfileType } from './auth-reducer'
import { profileAPI } from '../api/api'
import { ThunkAction } from 'redux-thunk'
import { RootReducerType } from './store'

/* Action types */
const INITIALIZED_SUCCESS = 'samurai-network/app/INITIALIZED_SUCCESS'

const initialState = {
  initialized: false,
}

type InitialStateType = typeof initialState

type ActionTypes = InitializedSuccessType | SetMyProfileType

function initReducer (state = initialState, action: ActionTypes): InitialStateType {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }

    default:
      return state
  }
}

/* Action creators */
type InitializedSuccessType = { type: typeof INITIALIZED_SUCCESS };
export const initializedSuccess = (): InitializedSuccessType => ({
  type: INITIALIZED_SUCCESS
})

/* Thunk creators */
type ThunkType = ThunkAction<Promise<void>, RootReducerType, unknown, ActionTypes>

export const initializeApp = (): ThunkType => {
  return async (dispatch) => {
    dispatch(getAuthUserData())
      .then(() => {
        dispatch(getMyProfile()).then(() => {
          dispatch(initializedSuccess())
        })
      })
  }
}

export const getMyProfile = (): ThunkType => {
  return async (dispatch, getState) => {
    const isAuth = getState().auth.isAuth
    const userID = getState().auth.userId

    if (isAuth && userID) {
      const response = await profileAPI.getProfile(userID)
      dispatch(setMyProfile(response))
    }
  }
}

export default initReducer
