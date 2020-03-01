import React, { useEffect, useState } from 'react'
import styles from './Status.module.css'

function Status (props) {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
  }

  const updateStatus = () => {
    deactivateEditMode()
    props.updateStatus(status)
  }

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value)
  }

  const selectInputText = (event) => {
    event.currentTarget.select()
  }

  return (
    <div className={styles.status}>
      {
        !editMode &&
        <div onClick={activateEditMode}>{props.status || 'null'}</div>
      }

      {
        editMode &&
        <div>
          <input autoFocus onChange={onStatusChange} onBlur={updateStatus}
                 onFocus={selectInputText} type="text" value={status}/>
        </div>
      }
    </div>
  )
}

export default Status