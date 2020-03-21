import { IInterlocutor, IDialog, IMessagesAfterDate, IProfile } from '../types/types'
import { ThunkAction } from 'redux-thunk'
import { RootReducerType } from './store'
import { messagesAPI, profileAPI } from '../api/api'

/* Action types */
const SET_INTERLOCUTORS = 'samurai-network/messages/SET_INTERLOCUTORS'
const SET_NEW_INTERLOCUTOR = 'samurai-network/messages/SET_NEW_INTERLOCUTOR'
const SET_CURRENT_DIALOG = 'samurai-network/messages/SET_CURRENT_DIALOG'
const SET_MESSAGES_AFTER_DATE = 'samurai-network/messages/SET_MESSAGES_AFTER_DATE'
const SET_NEW_MESSAGES_COUNT = 'samurai-network/messages/SET_NEW_MESSAGES_COUNT'
const TOGGLE_IS_FETCHING = 'samurai-network/messages/TOGGLE_IS_FETCHING'

const initialState = {
  interlocutors: null as Array<IInterlocutor> | null,
  newInterlocutor: null as IProfile | null,
  currentDialog: null as Array<IDialog> | null,
  messagesAfterDate: null as Array<IMessagesAfterDate> | null,
  newMessagesCount: 0,

  fetching: {
    interlocutors: false,
    newInterlocutor: false,
    currentDialog: false,
    messagesAfterDate: false,
    newMessagesCount: false,
    sendMessage: false,
  },
}

type InitialStateType = typeof initialState;

type ActionTypes =
  setInterlocutorsActionType |
  setNewInterlocutorActionType |
  setCurrentDialogActionType |
  setNewMessagesCountActionType |
  setMessagesAfterDateActionType |
  toggleIsFetchingActionType

function messagesReducer (state = initialState, action: ActionTypes): InitialStateType {
  switch (action.type) {
    case SET_INTERLOCUTORS:
      return {
        ...state,
        interlocutors: action.messages
      }

    case SET_NEW_INTERLOCUTOR:
      return {
        ...state,
        newInterlocutor: action.profile
      }

    case SET_CURRENT_DIALOG:
      return {
        ...state,
        currentDialog: action.currentDialog
      }

    case SET_MESSAGES_AFTER_DATE:
      return {
        ...state,
        messagesAfterDate: action.messagesAfterDate
      }

    case SET_NEW_MESSAGES_COUNT:
      return {
        ...state,
        newMessagesCount: action.count
      }

    case TOGGLE_IS_FETCHING:
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

/* Action creators */
type setInterlocutorsActionType = { type: typeof SET_INTERLOCUTORS, messages: Array<IInterlocutor> };
export const setInterlocutors = (messages: Array<IInterlocutor>): setInterlocutorsActionType => ({
  type: SET_INTERLOCUTORS,
  messages
})

type setNewInterlocutorActionType = { type: typeof SET_NEW_INTERLOCUTOR, profile: IProfile };
export const setNewInterlocutor = (profile: IProfile): setNewInterlocutorActionType => ({
  type: SET_NEW_INTERLOCUTOR,
  profile
})

type setCurrentDialogActionType = { type: typeof SET_CURRENT_DIALOG, currentDialog: Array<IDialog> };
export const setCurrentDialog = (currentDialog: Array<IDialog>): setCurrentDialogActionType => ({
  type: SET_CURRENT_DIALOG,
  currentDialog
})

type setMessagesAfterDateActionType = { type: typeof SET_MESSAGES_AFTER_DATE, messagesAfterDate: Array<IMessagesAfterDate> };
export const setMessagesAfterDate = (messagesAfterDate: Array<IMessagesAfterDate>): setMessagesAfterDateActionType => ({
  type: SET_MESSAGES_AFTER_DATE,
  messagesAfterDate: messagesAfterDate
})

type setNewMessagesCountActionType = { type: typeof SET_NEW_MESSAGES_COUNT, count: number };
export const setNewMessagesCount = (count: number): setNewMessagesCountActionType => ({
  type: SET_NEW_MESSAGES_COUNT,
  count
})

type toggleIsFetchingPropertyType =
  'interlocutors' |
  'newInterlocutor' |
  'currentDialog' |
  'messagesAfterDate' |
  'newMessagesCount' |
  'sendMessage'
type toggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING,
  property: toggleIsFetchingPropertyType,
  isFetching: boolean
};
export const toggleIsFetching = (property: toggleIsFetchingPropertyType, isFetching: boolean): toggleIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  property,
  isFetching
})

/* Thunk creators */
type ThunkType = ThunkAction<Promise<void>, RootReducerType, unknown, ActionTypes>

export const startChatting = (userID: number): ThunkType => {
  return async () => {
    await messagesAPI.startChatting(userID)
  }
}

export const getInterlocutors = (): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsFetching('interlocutors', true))
    const res = await messagesAPI.getInterlocutors()
    dispatch(setInterlocutors(res))
    dispatch(toggleIsFetching('interlocutors', false))
  }
}

export const getNewInterlocutor = (userID: number): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsFetching('newInterlocutor', true))
    const res = await profileAPI.getProfile(userID)
    dispatch(setNewInterlocutor(res))
    dispatch(toggleIsFetching('newInterlocutor', false))
  }
}

export const getDialog = (userID: number): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsFetching('currentDialog', true))
    const res = await messagesAPI.getDialog(userID)
    if (!res.error) {
      dispatch(setCurrentDialog(res.items))
      dispatch(toggleIsFetching('currentDialog', false))
    }
  }
}

export const sendMessage = (userID: number, message: string): ThunkType => {
  return async (dispatch, getState, extraArgument) => {
    dispatch(toggleIsFetching('sendMessage', true))
    const res = await messagesAPI.sendMessage(userID, message)
    if (res.resultCode === 0) {
      Promise.resolve().then(() => {
        getDialog(userID)(dispatch, getState, extraArgument)
        getInterlocutors()(dispatch, getState, extraArgument)
      })
        .then(() => {
          dispatch(toggleIsFetching('sendMessage', false))
        })
    }
  }
}

export const getNewMessagesCount = (): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsFetching('newMessagesCount', true))
    const res = await messagesAPI.getNewMessagesCount()
    dispatch(setNewMessagesCount(res))
    dispatch(toggleIsFetching('newMessagesCount', false))
  }
}

export const getMessagesAfterDate = (userID: number, date: string): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsFetching('messagesAfterDate', true))
    const res = await messagesAPI.getMessagesAfterDate(userID, date)
    dispatch(setMessagesAfterDate(res))
    dispatch(toggleIsFetching('messagesAfterDate', false))
  }
}

export default messagesReducer
