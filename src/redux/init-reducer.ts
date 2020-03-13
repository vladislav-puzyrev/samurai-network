import { getAuthUserData } from './auth-reducer'

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
  // Когда все промисы будут resolve
  Promise.all([
    dispatch(getAuthUserData()),
  ]).then(() => {
    dispatch(initializedSuccess())
  })
}

export default initReducer
