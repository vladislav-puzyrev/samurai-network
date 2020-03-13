import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './App.module.css'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import Content from './Main/Content'
import HeaderContainer from './Header/HeaderContainer'
import { initializeApp } from '../redux/init-reducer'
import { AppStateType } from '../redux/store'
import { HashRouter } from 'react-router-dom'
import Preloader from './common/Preloader/Preloader'

type MapStatePropTypes = {
  initialized: boolean
}

type MapDispatchPropTypes = {
  initializeApp: () => void
}

type PropTypes = MapStatePropTypes & MapDispatchPropTypes

const App: React.FC<PropTypes> = (props) => {
  useEffect(() => {
    if (!props.initialized) {
      props.initializeApp()
    }
  }, [props])

  if (!props.initialized) {
    return <Preloader fullscreen/>
  }

  return (
    <HashRouter>
      <div className={styles.page}>
        <HeaderContainer/>
        <main className={styles.main}>
          <Sidebar/>
          <Content/>
        </main>
        <Footer/>
      </div>
    </HashRouter>
  )
}

function mapStateToProps (state: AppStateType): MapStatePropTypes {
  return {
    initialized: state.init.initialized
  }
}

export default connect<MapStatePropTypes, MapDispatchPropTypes, Object, AppStateType>(
  mapStateToProps, { initializeApp }
)(App)
