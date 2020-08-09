import { ActionsType } from './reducer'
import {
  toggleIsFetching,
  setInterlocutors,
  setNewInterlocutor,
  setCurrentDialog,
  setNewMessagesCount,
  setMessagesAfterDate
} from './actions'
import { BaseThunkType } from '../store'

type ThunkType = BaseThunkType<ActionsType>

export const startChatting = (userID: number): ThunkType => {
  return async (dispatch, getState, { messagesAPI }) => {
    await messagesAPI.startChatting(userID)
  }
}

export const getInterlocutors = (): ThunkType => {
  return async (dispatch, getState, { messagesAPI }) => {
    dispatch(toggleIsFetching('interlocutors', true))
    const res = await messagesAPI.getInterlocutors()
    dispatch(setInterlocutors(res))
    dispatch(toggleIsFetching('interlocutors', false))
  }
}

export const getNewInterlocutor = (userID: number): ThunkType => {
  return async (dispatch, getState, { profileAPI }) => {
    dispatch(toggleIsFetching('newInterlocutor', true))
    const res = await profileAPI.getProfile(userID)
    dispatch(setNewInterlocutor(res))
    dispatch(toggleIsFetching('newInterlocutor', false))
  }
}

export const getDialog = (userID: number): ThunkType => {
  return async (dispatch, getState, { messagesAPI }) => {
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
    const res = await extraArgument.messagesAPI.sendMessage(userID, message)
    if (res.resultCode === 0) {
      Promise.resolve().then(() => {
        getDialog(userID)(dispatch, getState, extraArgument)
        getInterlocutors()(dispatch, getState, extraArgument)
      }).then(() => {
        dispatch(toggleIsFetching('sendMessage', false))
      })
    }
  }
}

export const getNewMessagesCount = (): ThunkType => {
  return async (dispatch, getState, { messagesAPI }) => {
    dispatch(toggleIsFetching('newMessagesCount', true))
    const res = await messagesAPI.getNewMessagesCount()
    dispatch(setNewMessagesCount(res))
    dispatch(toggleIsFetching('newMessagesCount', false))
  }
}

export const getMessagesAfterDate = (userID: number, date: string): ThunkType => {
  return async (dispatch, getState, { messagesAPI }) => {
    dispatch(toggleIsFetching('messagesAfterDate', true))
    const res = await messagesAPI.getMessagesAfterDate(userID, date)
    dispatch(setMessagesAfterDate(res))
    dispatch(toggleIsFetching('messagesAfterDate', false))
  }
}
