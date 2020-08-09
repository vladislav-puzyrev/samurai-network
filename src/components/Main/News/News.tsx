import React from 'react'
import styles from './News.module.css'

function News () {
  document.title = 'Новости'

  return (
    <div className={styles.messages}>
      Новости
    </div>
  )
}

export default News
