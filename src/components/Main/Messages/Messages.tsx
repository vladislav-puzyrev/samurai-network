import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/store'
import { InterlocutorType, DialogType, MessagesAfterDateType, ProfileType } from '../../../types/types'
import {
  getInterlocutorsList,
  getDialog,
  getMessagesAfterDate,
  startChatting,
  sendMessage
} from '../../../redux/messages-reducer'
import { Redirect, useParams } from 'react-router-dom'
import Interlocutors from './Interlocutors/Interlocutors'
import Dialog from './Dialog/Dialog'
import styles from './Messages.module.css'

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
  myProfile: ProfileType | null
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
  myProfile,
}) => {
  const { userID } = useParams()
  const [interlocutor, setInterlocutor] = useState<InterlocutorType | null>(null)

  useEffect(() => {
    getInterlocutorsList()
  }, [getInterlocutorsList])

  useEffect(() => {
    if (userID) {
      getDialog(+userID)
    }
  }, [getDialog, userID])

  useEffect(() => {
    if (userID && interlocutors) {
      setInterlocutor(interlocutors.find((item) => item.id === +userID) || null)
    }
  }, [userID, interlocutors, setInterlocutor])

  if (!isAuth) {
    return <Redirect to='/login'/>
  }

  return (
    <div className={styles.messages}>
      <Interlocutors interlocutors={interlocutors}/>
      <Dialog
        userID={userID ? +userID : null}
        interlocutor={interlocutor}
        currentDialog={currentDialog}
        myPhoto={myProfile ? myProfile.photos.small : null}
        myID={myProfile ? myProfile.userId : null}
      />
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
    myProfile: state.auth.myProfile,
  }
}

export default connect<MapStatePropTypes, MapDispatchPropTypes, unknown, AppStateType>(mapStateToProps, {
  startChatting,
  getInterlocutorsList,
  getDialog,
  getMessagesAfterDate,
  sendMessage
})(Messages)
