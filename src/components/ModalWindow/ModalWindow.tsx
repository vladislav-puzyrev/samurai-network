import React, { useEffect } from 'react'
import styles from './ModalWindow.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

type PropTypes = {
  close: () => void
  title: string
}

const ModalWindow: React.FC<PropTypes> = ({ children, close, title }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  })

  const focusClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.dataset.close) {
      close()
    }
  }

  return (
    <div onClick={focusClose} className={styles.wrapper} data-close={true}>
      <div className={styles.childrenBox}>
        <div className={styles.control}>
          <span className={styles.title}>{title}</span>
          <button autoFocus onClick={close} className={styles.closeButton}>
            <FontAwesomeIcon icon={faTimes} size='3x' color='#141414'/>
          </button>
        </div>
        <div className={styles.children}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ModalWindow
