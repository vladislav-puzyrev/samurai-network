import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/store'
import { AllMessagesType, DialogType, MessagesAfterDateType } from '../../../types/types'
import {
  getAllMessages,
  getDialog,
  getMessagesAfterDate,
  startChatting,
  sendMessage
} from '../../../redux/messages-reducer'
import { useParams } from 'react-router-dom'

type MapStatePropTypes = {
  allMessages: Array<AllMessagesType> | null
  currentDialog: Array<DialogType> | null
  messagesAfterDate: Array<MessagesAfterDateType> | null

  fetching: {
    allMessages: boolean
    currentDialog: boolean
    messagesAfterDate: boolean
  }
}

type MapDispatchPropTypes = {
  startChatting: (userID: number) => void
  getAllMessages: () => void
  getDialog: (userID: number) => void
  sendMessage: (userID: number, message: string) => void
  getMessagesAfterDate: (userID: number, date: string) => void
}

const Messages: React.FC<MapStatePropTypes & MapDispatchPropTypes> = ({
  allMessages,
  currentDialog,
  messagesAfterDate,
  fetching,
  startChatting,
  getAllMessages,
  getDialog,
  sendMessage,
  getMessagesAfterDate,
}) => {
  const { userID } = useParams()

  useEffect(() => {
    getAllMessages()
  }, [getAllMessages])

  return (
    <div>Messages</div>
  )
}

function mapStateToProps (state: AppStateType): MapStatePropTypes {
  return {
    allMessages: state.messagesPage.allMessages,
    currentDialog: state.messagesPage.currentDialog,
    messagesAfterDate: state.messagesPage.messagesAfterDate,
    fetching: state.messagesPage.fetching,
  }
}

export default connect<MapStatePropTypes, MapDispatchPropTypes, unknown, AppStateType>(mapStateToProps, {
  startChatting,
  getAllMessages,
  getDialog,
  getMessagesAfterDate,
  sendMessage
})(Messages)
