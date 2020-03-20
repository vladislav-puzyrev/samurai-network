import React, { useEffect, useRef } from 'react'
import styles from './Sidebar.module.css'
import Menu from './Menu/Menu'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'
import { getNewMessagesCount } from '../../redux/messages-reducer'

type MapStatePropTypes = { newMessagesCount: number, isAuth: boolean }

type MapDispatchPropTypes = { getNewMessagesCount: () => void }

const Sidebar: React.FC<MapStatePropTypes & MapDispatchPropTypes> = ({ newMessagesCount, getNewMessagesCount, isAuth }) => {
  const timerID = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (isAuth) {
      timerID.current = setInterval(() => {
        getNewMessagesCount()
      }, 10000)
    }

    return () => {
      if (timerID.current) {
        clearInterval(timerID.current)
      }
    }
  }, [getNewMessagesCount, isAuth])

  return (
    <aside className={styles.aside}>
      <Menu newMessagesCount={newMessagesCount}/>
    </aside>
  )
}

function mapStateToProps (state: AppStateType): MapStatePropTypes {
  return {
    newMessagesCount: state.messagesPage.newMessagesCount,
    isAuth: state.auth.isAuth,
  }
}

export default connect<MapStatePropTypes, MapDispatchPropTypes, unknown, AppStateType>(mapStateToProps, {
  getNewMessagesCount
})(Sidebar)
