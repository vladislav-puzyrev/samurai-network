import * as actions from './actions'
import * as constants from './constants'
import { InferValueTypes } from '../store'
import { InterlocutorType, DialogType, MessagesAfterDateType, ProfileType } from '../../types/types'

const initialState = {
  interlocutors: null as InterlocutorType[] | null,
  newInterlocutor: null as ProfileType | null,
  currentDialog: null as DialogType[] | null,
  messagesAfterDate: null as MessagesAfterDateType[] | null,
  newMessagesCount: 0,
  currentInterlocutor: null as number | null,

  fetching: {
    interlocutors: false,
    newInterlocutor: false,
    currentDialog: false,
    messagesAfterDate: false,
    newMessagesCount: false,
    sendMessage: false
  }
}

export type ActionsType = ReturnType<InferValueTypes<typeof actions>>

function reducer (state = initialState, action: ActionsType): typeof initialState {
  switch (action.type) {
    case constants.SET_INTERLOCUTORS:
      return {
        ...state,
        interlocutors: action.messages
      }

    case constants.SET_NEW_INTERLOCUTOR:
      return {
        ...state,
        newInterlocutor: action.profile
      }

    case constants.SET_CURRENT_DIALOG:
      return {
        ...state,
        currentDialog: action.currentDialog
      }

    case constants.SET_MESSAGES_AFTER_DATE:
      return {
        ...state,
        messagesAfterDate: action.messagesAfterDate
      }

    case constants.SET_NEW_MESSAGES_COUNT:
      return {
        ...state,
        newMessagesCount: action.count
      }

    case constants.SET_CURRENT_INTERLOCUTOR:
      return {
        ...state,
        currentInterlocutor: action.userID
      }

    case constants.TOGGLE_IS_FETCHING:
      return {
        ...state,
        fetching: {
          ...state.fetching,
          [action.property]: action.isFetching
        }
      }

    default:
      return state
  }
}

export default reducer
