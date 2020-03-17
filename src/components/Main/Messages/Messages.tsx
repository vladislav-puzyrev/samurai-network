import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/store'
import { InterlocutorType, DialogType, MessagesAfterDateType } from '../../../types/types'
import {
  getInterlocutorsList,
  getDialog,
  getMessagesAfterDate,
  startChatting,
  sendMessage
} from '../../../redux/messages-reducer'
import { Redirect, useParams } from 'react-router-dom'
import AllMessages from './AllMessages/AllMessages'
import Dialog from './Dialog/Dialog'

type MapStatePropTypes = {
  interlocutors: Array<InterlocutorType> | null
  currentDialog: Array<DialogType> | null
  messagesAfterDate: Array<MessagesAfterDateType> | null

  fetching: {
    interlocutors: boolean
    currentDialog: boolean
    messagesAfterDate: boolean
  }

  isAuth: boolean
}

type MapDispatchPropTypes = {
  startChatting: (userID: number) => void
  getInterlocutorsList: () => void
  getDialog: (userID: number) => void
  sendMessage: (userID: number, message: string) => void
  getMessagesAfterDate: (userID: number, date: string) => void
}

const Messages: React.FC<MapStatePropTypes & MapDispatchPropTypes> = ({
  interlocutors,
  currentDialog,
  messagesAfterDate,
  fetching,
  startChatting,
  getInterlocutorsList,
  getDialog,
  sendMessage,
  getMessagesAfterDate,
  isAuth,
}) => {
  const { userID } = useParams()

  useEffect(() => {
    getInterlocutorsList()
  }, [getInterlocutorsList])

  useEffect(() => {
    if (userID) {
      getDialog(+userID)
    }
  }, [getDialog, userID])

  if (!isAuth) {
    return <Redirect to='/login'/>
  }

  let interlocutor
  if (userID) {
    interlocutor = interlocutors?.find((item) => item.id === +userID)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', height: 'calc(100vh - 60px - 60px - 40px)' }}>
      <AllMessages interlocutors={interlocutors}/>
      <Dialog interlocutor={interlocutor} currentDialog={currentDialog}/>
    </div>
  )
}

function mapStateToProps (state: AppStateType): MapStatePropTypes {
  return {
    interlocutors: state.messagesPage.interlocutors,
    currentDialog: state.messagesPage.currentDialog,
    messagesAfterDate: state.messagesPage.messagesAfterDate,
    fetching: state.messagesPage.fetching,
    isAuth: state.auth.isAuth,
  }
}

export default connect<MapStatePropTypes, MapDispatchPropTypes, unknown, AppStateType>(mapStateToProps, {
  startChatting,
  getInterlocutorsList,
  getDialog,
  getMessagesAfterDate,
  sendMessage
})(Messages)
