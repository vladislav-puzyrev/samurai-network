import React from 'react'
import styles from './Dialog.module.css'
import { DialogType, InterlocutorType } from '../../../../types/types'

type PropTypes = {
  currentDialog: Array<DialogType> | null
  interlocutor: InterlocutorType | undefined
}

const Dialog: React.FC<PropTypes> = () => {
  return (
    <div className={styles.wrapper}>
      dialog
    </div>
  )
}

export default Dialog
