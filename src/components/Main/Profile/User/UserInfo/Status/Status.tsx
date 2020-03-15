import React, { useEffect, useState } from 'react'
import styles from './Status.module.css'

type PropTypes = {
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
}

const Status: React.FC<PropTypes> = ({ status, updateStatus, isOwner }) => {
  const [editMode, setEditMode] = useState(false)
  const [localStatus, setLocalStatus] = useState(status)

  useEffect(() => {
    setLocalStatus(status)
  }, [status])

  const activateEditMode = () => {setEditMode(true)}
  const deactivateEditMode = () => {setEditMode(false)}

  const onUpdateStatus = () => {
    deactivateEditMode()
    updateStatus(localStatus)
  }

  const onStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalStatus(event.currentTarget.value)
  }

  const selectInputText = (event: React.FocusEvent<HTMLInputElement>) => {
    event.currentTarget.select()
  }

  const statusClass = ((status) ? styles.statusExist : styles.statusNotExist) + ' ' + styles.status

  return (
    <div className={styles.statusBox}>
      {
        !editMode ? (
          isOwner && <button className={statusClass} onClick={activateEditMode}>{status || 'изменить статус'}</button>
        ) : (
          <input
            autoFocus
            onChange={onStatusChange}
            onBlur={onUpdateStatus}
            onFocus={selectInputText}
            type="text"
            value={localStatus}
            className={styles.statusInput}
          />
        )
      }
    </div>
  )
}

export default Status
