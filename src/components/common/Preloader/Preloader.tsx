import React from 'react'
import styles from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.gif'

type PropTypes = {
  stretch?: boolean
}

const Preloader: React.FC<PropTypes> = ({ stretch }) => (
  <img className={stretch ? styles.preloaderStretch : styles.preloaderIMG} src={preloader} alt='load'/>
)

export default Preloader
