import * as actions from './actions'
import * as constants from './constants'
import { InferValueTypes } from '../store'

const initialState = {
  initialized: false
}

export type ActionsType = ReturnType<InferValueTypes<typeof actions>>

function reducer (state = initialState, action: ActionsType): typeof initialState {
  switch (action.type) {
    case constants.INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }

    default:
      return state
  }
}

export default reducer
