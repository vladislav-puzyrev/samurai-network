import React from 'react'
import styles from './Music.module.css'
import useSetTitle from '../../../hooks/useSetTitle'

function Music () {
  useSetTitle('Музыка')

  return (
    <div className={styles.messages}>
      Музыка
    </div>
  )
}

export default Music
