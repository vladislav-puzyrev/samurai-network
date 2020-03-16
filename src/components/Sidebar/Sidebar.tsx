import React, { useEffect } from 'react'
import styles from './Sidebar.module.css'
import Menu from './Menu/Menu'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'
import { getNewMessagesCount } from '../../redux/messages-reducer'

type MapStatePropTypes = { newMessagesCount: number }

type MapDispatchPropTypes = { getNewMessagesCount: () => void }

const Sidebar: React.FC<MapStatePropTypes & MapDispatchPropTypes> = ({ newMessagesCount, getNewMessagesCount }) => {
  useEffect(() => {
    getNewMessagesCount()
  }, [getNewMessagesCount])

  return (
    <aside className={styles.aside}>
      <Menu newMessagesCount={newMessagesCount}/>
    </aside>
  )
}

function mapStateToProps (state: AppStateType): MapStatePropTypes {
  return {
    newMessagesCount: state.messagesPage.newMessagesCount
  }
}

export default connect<MapStatePropTypes, MapDispatchPropTypes, unknown, AppStateType>(mapStateToProps, {
  getNewMessagesCount
})(Sidebar)
