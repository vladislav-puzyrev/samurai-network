import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styles from './App.module.css'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'
import Header from './Header/Header'
import { initializeApp } from '../redux/init/thunks'
import { RootReducerType } from '../redux/store'
import { HashRouter } from 'react-router-dom'
import Preloader from './common/Preloader/Preloader'
import ModalWindow from './ModalWindow/ModalWindow'

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

  const [modalWindowIsOpen, setModalWindowIsOpen] = useState(false)
  const [modalWindowChildren, setModalWindowChildren] = useState<React.ReactNode>(null)
  const [modalWindowTitle, setModalWindowTitle] = useState('')

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
        <div className={styles.wrapper}>
          <main className={styles.main}>
            <Sidebar/>
            <Main/>
          </main>
        </div>
        <Footer/>

        {
          modalWindowIsOpen ? <ModalWindow title={modalWindowTitle} close={() => {setModalWindowIsOpen(false)}}>
            {modalWindowChildren}
          </ModalWindow> : null
        }
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
