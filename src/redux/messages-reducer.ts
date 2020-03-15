import { GetAllDialogsResponse, GetDialogResponse, messagesAfterDateResponse } from '../types/APITypes'

/* Action types */
const SET_ALL_MESSAGES = 'samurai-network/messages/GET_ALL_MESSAGES'
const SET_CURRENT_DIALOG = 'samurai-network/messages/SET_CURRENT_DIALOG'
const SET_MESSAGES_AFTER_DATE = 'samurai-network/messages/SET_MESSAGES_AFTER_DATE'
const SET_NEW_MESSAGES_COUNT = 'samurai-network/messages/SET_NEW_MESSAGES_COUNT'
const TOGGLE_IS_FETCHING = 'samurai-network/messages/SET_NEW_MESSAGES_COUNT'

const initialState = {
  allMessages: null as Array<GetAllDialogsResponse> | null,
  currentDialog: null as GetDialogResponse | null,
  messagesAfterDate: null as Array<messagesAfterDateResponse> | null,
  newMessagesCount: 0,

  // fetching: {
  //   allMessages: false,
  //   currentDialog: false,
  //   messagesAfterDate: false,
  //   newMessagesCount: false,
  // },
}

type InitialStateType = typeof initialState;

type ActionTypes =
  setAllMessagesActionType |
  setCurrentDialogActionType |
  setNewMessagesCountActionType |
  setMessagesAfterDateActionType

// toggleIsFetchingActionType

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

    // case TOGGLE_IS_FETCHING:
    //   return {
    //     ...state,
    //     fetching: {
    //       ...state.fetching,
    //       action.property: action.isFetching
    //     }
    //   }

    default:
      return state
  }
}

/* Action creators */
type setAllMessagesActionType = { type: typeof SET_ALL_MESSAGES, messages: Array<GetAllDialogsResponse> };
export const setAllMessages = (messages: Array<GetAllDialogsResponse>): setAllMessagesActionType => ({
  type: SET_ALL_MESSAGES,
  messages
})

type setCurrentDialogActionType = { type: typeof SET_CURRENT_DIALOG, currentDialog: GetDialogResponse };
export const setCurrentDialog = (currentDialog: GetDialogResponse): setCurrentDialogActionType => ({
  type: SET_CURRENT_DIALOG,
  currentDialog
})

type setMessagesAfterDateActionType = { type: typeof SET_MESSAGES_AFTER_DATE, messagesAfterDate: Array<messagesAfterDateResponse> };
export const setMessagesAfterDate = (messagesAfterDate: Array<messagesAfterDateResponse>): setMessagesAfterDateActionType => ({
  type: SET_MESSAGES_AFTER_DATE,
  messagesAfterDate
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

export default messagesReducer
