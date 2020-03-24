import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { RootReducerType } from '../../../redux/store'
import { IInterlocutor, IDialog, IMessagesAfterDate, IProfile } from '../../../types/types'
import {
  getInterlocutors,
  getDialog,
  getMessagesAfterDate,
  startChatting,
  sendMessage,
  getNewInterlocutor,
  setCurrentInterlocutor
} from '../../../redux/messages-reducer'
import { Redirect, useParams } from 'react-router-dom'
import Interlocutors from './Interlocutors/Interlocutors'
import Dialog from './Dialog/Dialog'
import styles from './Messages.module.css'
import useSetTitle from '../../../hooks/useSetTitle'

type MapStatePropTypes = {
  interlocutors: Array<IInterlocutor> | null
  newInterlocutor: IProfile | null
  currentDialog: Array<IDialog> | null
  messagesAfterDate: Array<IMessagesAfterDate> | null
  currentInterlocutor: number | null

  fetching: {
    interlocutors: boolean
    newInterlocutor: boolean
    currentDialog: boolean
    messagesAfterDate: boolean
    sendMessage: boolean
  }

  isAuth: boolean
  myProfile: IProfile | null
}

type MapDispatchPropTypes = {
  startChatting: (userID: number) => void
  getInterlocutors: () => void
  getNewInterlocutor: (userID: number) => void
  getDialog: (userID: number) => void
  sendMessage: (userID: number, message: string) => void
  getMessagesAfterDate: (userID: number, date: string) => void
  setCurrentInterlocutor: (userID: number) => void
}

const Messages: React.FC<MapStatePropTypes & MapDispatchPropTypes> = ({
  interlocutors,
  newInterlocutor,
  getNewInterlocutor,
  currentDialog,
  messagesAfterDate,
  fetching,
  startChatting,
  getInterlocutors,
  getDialog,
  sendMessage,
  getMessagesAfterDate,
  isAuth,
  myProfile,
  currentInterlocutor,
  setCurrentInterlocutor,
}) => {
  const { userID } = useParams()
  const [interlocutor, setInterlocutor] = useState<IInterlocutor | null>(null)

  useSetTitle('Сообщения')

  useEffect(() => {
    if (userID && +userID !== currentInterlocutor) {
      setCurrentInterlocutor(+userID)
    }
  }, [currentInterlocutor, setCurrentInterlocutor, userID])

  useEffect(() => {
    if (isAuth) {
      getInterlocutors()
    }
  }, [getInterlocutors, isAuth])

  useEffect(() => {
    if (userID) {
      getNewInterlocutor(+userID)
    }
  }, [getNewInterlocutor, userID])

  useEffect(() => {
    if (userID && isAuth) {
      getDialog(+userID)
    }
  }, [getDialog, isAuth, userID])

  useEffect(() => {
    if (userID && interlocutors) {
      setInterlocutor(interlocutors.find((item) => item.id === +userID) || null)
    }
  }, [userID, interlocutors])

  if (!isAuth) {
    return <Redirect to='/login'/>
  }

  if (!userID && currentInterlocutor) {
    return <Redirect to={`/messages/${currentInterlocutor}`}/>
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
        dialogFetching={fetching.currentDialog}
        newInterlocutor={newInterlocutor}
        sendMessage={sendMessage}
        startChatting={startChatting}
        sendMessageFetching={fetching.sendMessage}
      />
    </div>
  )
}

function mapStateToProps (state: RootReducerType): MapStatePropTypes {
  return {
    interlocutors: state.messages.interlocutors,
    newInterlocutor: state.messages.newInterlocutor,
    currentDialog: state.messages.currentDialog,
    messagesAfterDate: state.messages.messagesAfterDate,
    fetching: state.messages.fetching,
    isAuth: state.auth.isAuth,
    myProfile: state.auth.myProfile,
    currentInterlocutor: state.messages.currentInterlocutor,
  }
}

export default connect<MapStatePropTypes, MapDispatchPropTypes, unknown, RootReducerType>(mapStateToProps, {
  startChatting,
  getInterlocutors,
  getNewInterlocutor,
  getDialog,
  getMessagesAfterDate,
  sendMessage,
  setCurrentInterlocutor,
})(Messages)
