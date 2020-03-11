import React from 'react'
import styles from './PagePreloader.module.css'
import Preloader from '../common/Preloader/Preloader'

function PagePreloader () {
  return (
    <div className={styles.wrapper}>
      <div className={styles.preloader}>
        <Preloader/>
      </div>
    </div>
  )
}

export default PagePreloader
