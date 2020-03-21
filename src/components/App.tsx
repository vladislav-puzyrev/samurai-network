import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './App.module.css'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'
import Header from './Header/Header'
import { initializeApp } from '../redux/init-reducer'
import { RootReducerType } from '../redux/store'
import { HashRouter } from 'react-router-dom'
import Preloader from './common/Preloader/Preloader'

type MapStatePropTypes = {
  initialized: boolean
}

type MapDispatchPropTypes = {
  initializeApp: () => void
}

const App: React.FC<MapStatePropTypes & MapDispatchPropTypes> = ({ initializeApp, initialized }) => {
  useEffect(() => {
    initializeApp()
  }, [initializeApp])

  if (!initialized) {
    return (
      <div className={styles.page}>
        <Preloader stretch/>
      </div>
    )
  }

  return (
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
  )
}

function mapStateToProps (state: RootReducerType): MapStatePropTypes {
  return {
    initialized: state.init.initialized
  }
}

export default connect<MapStatePropTypes, MapDispatchPropTypes, unknown, RootReducerType>(
  mapStateToProps, { initializeApp }
)(App)
