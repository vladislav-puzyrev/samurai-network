import React, { useEffect } from 'react'
import { connect, Provider } from 'react-redux'
import styles from './App.module.css'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'
import HeaderContainer from './components/Header/HeaderContainer'
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'
import store from './redux/redux-store'
import { HashRouter } from 'react-router-dom'

function App (props) {
  useEffect(() => {
    props.initializeApp()
  })

  if (!props.initialized) {
    return <Preloader />
  }

  return (
    <div className={styles.page}>
      <HeaderContainer />
      <main className={styles.main}>
        <Sidebar />
        <Content />
      </main>
      <Footer />
    </div>
  )
}

function mapStateToProps (state) {
  return {
    initialized: state.init.initialized
  }
}

const AppConnect = connect(mapStateToProps, { initializeApp })(App)

export default function AppContainer (props) {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppConnect />
      </HashRouter>
    </Provider>
  )
}
