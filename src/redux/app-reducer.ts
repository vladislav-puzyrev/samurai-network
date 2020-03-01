import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'samurai-network/app/INITIALIZED_SUCCESS';

export type InitialStateType = {
  initialized: boolean
};

const initialState: InitialStateType = {
  initialized: false,
};

function appReducer(state = initialState, action: any): InitialStateType {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
}

type InitializedSuccessType = {
  type: typeof INITIALIZED_SUCCESS
};
export const initializedSuccess = (): InitializedSuccessType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
  // Когда все промисы будут resolve
  Promise.all([
    dispatch(getAuthUserData()),
  ]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;