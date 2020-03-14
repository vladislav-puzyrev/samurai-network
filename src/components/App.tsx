import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './App.module.css'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'
import Header from './Header/Header'
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

const App: React.FC<PropTypes> = ({ initializeApp, initialized }) => {
  useEffect(() => {
    initializeApp()
  }, [initializeApp])

  if (!initialized) {
    return <Preloader fullscreen/>
  }

  return (
    <React.StrictMode>
      <HashRouter>
        <div className={styles.page}>
          <Header/>
          <main className={styles.main}>
            <Sidebar/>
            <Main/>
          </main>
          <Footer/>
        </div>
      </HashRouter>
    </React.StrictMode>
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
