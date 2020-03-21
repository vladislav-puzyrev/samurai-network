import React from 'react'
import styles from './Interlocutors.module.css'
import { IInterlocutor } from '../../../../types/types'
import InterlocutorsList from './InterlocutorsList/InterlocutorsList'
import Preloader from '../../../common/Preloader/Preloader'

type PropTypes = {
  interlocutors: Array<IInterlocutor> | null
}

const Interlocutors: React.FC<PropTypes> = ({ interlocutors }) => {
  return (
    <div className={styles.wrapper}>
      {
        interlocutors ? <InterlocutorsList interlocutors={interlocutors}/> : <Preloader/>
      }
    </div>
  )
}

export default Interlocutors
