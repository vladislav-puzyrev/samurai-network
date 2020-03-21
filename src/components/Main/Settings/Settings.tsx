import React from 'react'
import styles from './Settings.module.css'
import useSetTitle from '../../../hooks/useSetTitle'

function Settings () {
  useSetTitle('Настройки')

  return (
    <div className={styles.messages}>
      Настройки
    </div>
  )
}

export default Settings
