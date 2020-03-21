import React, { useEffect, useRef } from 'react'
import styles from './Sidebar.module.css'
import Menu from './Menu/Menu'
import { connect } from 'react-redux'
import { RootReducerType } from '../../redux/store'
import { getNewMessagesCount } from '../../redux/messages-reducer'

type MapStatePropTypes = {
  newMessagesCount: number
  isAuth: boolean
  newMessagesCountFetching: boolean
}

type MapDispatchPropTypes = {
  getNewMessagesCount: () => void
}

const Sidebar: React.FC<MapStatePropTypes & MapDispatchPropTypes> = ({
  newMessagesCount, getNewMessagesCount, isAuth, newMessagesCountFetching
}) => {
  const timerID = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (isAuth) {
      getNewMessagesCount()
    }
  }, [getNewMessagesCount, isAuth])

  useEffect(() => {
    if (isAuth && !newMessagesCountFetching) {
      timerID.current = setInterval(() => {
        if (!newMessagesCountFetching) {
          getNewMessagesCount()
        }
      }, 10000)
    }

    return () => {
      if (timerID.current) {
        clearInterval(timerID.current)
      }
    }
  }, [getNewMessagesCount, isAuth, newMessagesCountFetching])

  return (
    <aside className={styles.aside}>
      <Menu newMessagesCount={newMessagesCount}/>
    </aside>
  )
}

function mapStateToProps (state: RootReducerType): MapStatePropTypes {
  return {
    newMessagesCount: state.messages.newMessagesCount,
    isAuth: state.auth.isAuth,
    newMessagesCountFetching: state.messages.fetching.newMessagesCount
  }
}

export default connect<MapStatePropTypes, MapDispatchPropTypes, unknown, RootReducerType>(mapStateToProps, {
  getNewMessagesCount
})(Sidebar)
