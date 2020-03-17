import React from 'react'
import styles from './AllMessages.module.css'
import { InterlocutorType } from '../../../../types/types'
import MessageList from './MessageList/MessageList'
import Preloader from '../../../common/Preloader/Preloader'

type PropTypes = {
  interlocutors: Array<InterlocutorType> | null
}

const AllMessages: React.FC<PropTypes> = ({ interlocutors }) => {
  return (
    <div className={styles.wrapper}>
      {
        interlocutors ? <MessageList interlocutors={interlocutors}/> : <Preloader/>
      }
    </div>
  )
}

export default AllMessages
