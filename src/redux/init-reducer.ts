import { getAuthUserData, setMyProfile } from './auth-reducer'
import { profileAPI } from '../api/api'

/* Action types */
const INITIALIZED_SUCCESS = 'samurai-network/app/INITIALIZED_SUCCESS'

export type InitialStateType = {
  initialized: boolean
};

const initialState: InitialStateType = {
  initialized: false,
}

function initReducer (state = initialState, action: any): InitialStateType {
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
type InitializedSuccessType = {
  type: typeof INITIALIZED_SUCCESS
};

export const initializedSuccess = (): InitializedSuccessType => ({ type: INITIALIZED_SUCCESS })

/* Thunk creators */
export const initializeApp = () => (dispatch: any) => {
  dispatch(getAuthUserData())
    .then(() => {
      dispatch(getMyProfile()).then(() => {
        dispatch(initializedSuccess())
      })
    })
}

export const getMyProfile = () => async (dispatch: any, getState: any) => {
  if (getState().auth.isAuth) {
    const response = await profileAPI.getProfile(getState().auth.userId)
    dispatch(setMyProfile(response))
  }
}

export default initReducer
