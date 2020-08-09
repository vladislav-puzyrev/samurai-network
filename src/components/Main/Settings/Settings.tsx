import React from 'react'
import styles from './Settings.module.css'

function Settings () {
  document.title = 'Настройки'

  return (
    <div className={styles.messages}>
      Настройки
    </div>
  )
}

export default Settings
