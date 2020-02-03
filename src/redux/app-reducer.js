import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'SET_INITIALIZED';

const initialState = {
    initialized: false
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };

        default:
            return state;
    }
}

export const setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    // Когда все промисы будут resolve
    Promise.all([
        dispatch(getAuthUserData())
    ]).then(() => {
        dispatch(setInitializedSuccess());
    });
};

export default appReducer;