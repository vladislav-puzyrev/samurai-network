import React from 'react'
import styles from './News.module.css'
import useSetTitle from '../../../hooks/useSetTitle'

function News () {
  useSetTitle('Новости')

  return (
    <div className={styles.messages}>
      Новости
    </div>
  )
}

export default News
