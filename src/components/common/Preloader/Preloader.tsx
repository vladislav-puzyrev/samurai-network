import React from 'react'
import styles from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.gif'

type PropTypes = {
  fullscreen?: boolean
}

const Preloader: React.FC<PropTypes> = ({ fullscreen = false }) => {
  return (fullscreen) ? (
    <div className={styles.wrapper}>
      <div className={styles.preloader}>
        <img className={styles.preloaderIMG} src={preloader} alt='load'/>
      </div>
    </div>
  ) : (
    <img className={styles.preloaderIMG} src={preloader} alt='load'/>
  )
}

export default Preloader
