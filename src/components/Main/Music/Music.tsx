import React from 'react'
import styles from './Music.module.css'

function Music () {
  document.title = 'Музыка'

  return (
    <div className={styles.messages}>
      Музыка
    </div>
  )
}

export default Music
