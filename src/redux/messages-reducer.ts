import { AllMessagesType, DialogType, MessagesAfterDateType } from '../types/types'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from './store'
import { messagesAPI } from '../api/api'

/* Action types */
const SET_ALL_MESSAGES = 'samurai-network/messages/GET_ALL_MESSAGES'
const SET_CURRENT_DIALOG = 'samurai-network/messages/SET_CURRENT_DIALOG'
const SET_MESSAGES_AFTER_DATE = 'samurai-network/messages/SET_MESSAGES_AFTER_DATE'
const SET_NEW_MESSAGES_COUNT = 'samurai-network/messages/SET_NEW_MESSAGES_COUNT'
const TOGGLE_IS_FETCHING = 'samurai-network/messages/TOGGLE_IS_FETCHING'

const initialState = {
  allMessages: null as Array<AllMessagesType> | null,
  currentDialog: null as Array<DialogType> | null,
  messagesAfterDate: null as Array<MessagesAfterDateType> | null,
  newMessagesCount: 0,

  fetching: {
    allMessages: false,
    currentDialog: false,
    messagesAfterDate: false,
    newMessagesCount: false,
  },
}

type InitialStateType = typeof initialState;

type ActionTypes =
  setAllMessagesActionType |
  setCurrentDialogActionType |
  setNewMessagesCountActionType |
  setMessagesAfterDateActionType |
  toggleIsFetchingActionType

function messagesReducer (state = initialState, action: ActionTypes): InitialStateType {
  switch (action.type) {
    case SET_ALL_MESSAGES:
      return {
        ...state,
        allMessages: action.messages
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
type setAllMessagesActionType = { type: typeof SET_ALL_MESSAGES, messages: Array<AllMessagesType> };
export const setAllMessages = (messages: Array<AllMessagesType>): setAllMessagesActionType => ({
  type: SET_ALL_MESSAGES,
  messages
})

type setCurrentDialogActionType = { type: typeof SET_CURRENT_DIALOG, currentDialog: Array<DialogType> };
export const setCurrentDialog = (currentDialog: Array<DialogType>): setCurrentDialogActionType => ({
  type: SET_CURRENT_DIALOG,
  currentDialog
})

type setMessagesAfterDateActionType = { type: typeof SET_MESSAGES_AFTER_DATE, messagesAfterDate: Array<MessagesAfterDateType> };
export const setMessagesAfterDate = (messagesAfterDate: Array<MessagesAfterDateType>): setMessagesAfterDateActionType => ({
  type: SET_MESSAGES_AFTER_DATE,
  messagesAfterDate: messagesAfterDate
})

type setNewMessagesCountActionType = { type: typeof SET_NEW_MESSAGES_COUNT, count: number };
export const setNewMessagesCount = (count: number): setNewMessagesCountActionType => ({
  type: SET_NEW_MESSAGES_COUNT,
  count
})

type toggleIsFetchingPropertyType = 'allMessages' | 'currentDialog' | 'messagesAfterDate' | 'newMessagesCount'
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
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const startChatting = (userID: number): ThunkType => {
  return async () => {
    await messagesAPI.startChatting(userID)
  }
}

export const getAllMessages = (): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsFetching('allMessages', true))
    const res = await messagesAPI.getAllMessages()
    dispatch(setAllMessages(res))
    dispatch(toggleIsFetching('allMessages', false))
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
  return async () => {
    await messagesAPI.sendMessage(userID, message)
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
