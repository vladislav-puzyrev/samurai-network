import * as constants from './constants'
import { DialogType, InterlocutorType, MessagesAfterDateType, ProfileType } from '../../types/types'

export const setInterlocutors = (messages: InterlocutorType[]) => ({
  type: constants.SET_INTERLOCUTORS,
  messages
})

export const setNewInterlocutor = (profile: ProfileType) => ({
  type: constants.SET_NEW_INTERLOCUTOR,
  profile
})

export const setCurrentDialog = (currentDialog: DialogType[]) => ({
  type: constants.SET_CURRENT_DIALOG,
  currentDialog
})

export const setMessagesAfterDate = (messagesAfterDate: MessagesAfterDateType[]) => ({
  type: constants.SET_MESSAGES_AFTER_DATE,
  messagesAfterDate: messagesAfterDate
})

export const setNewMessagesCount = (count: number) => ({
  type: constants.SET_NEW_MESSAGES_COUNT,
  count
})

export const setCurrentInterlocutor = (userID: number) => ({
  type: constants.SET_CURRENT_INTERLOCUTOR,
  userID
})

type toggleIsFetchingPropertyType =
  | 'interlocutors'
  | 'newInterlocutor'
  | 'currentDialog'
  | 'messagesAfterDate'
  | 'newMessagesCount'
  | 'sendMessage'

export const toggleIsFetching = (property: toggleIsFetchingPropertyType, isFetching: boolean) => ({
  type: constants.TOGGLE_IS_FETCHING,
  property,
  isFetching
})
