import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import styles from './Main.module.css'
import Users from './Users/Users'
import News from './News/News'
import Music from './Music/Music'
import Settings from './Settings/Settings'
import Login from './Login/Login'
import Profile from './Profile/Profile'
import Messages from './Messages/Messages'

function Main () {
  return (
    <div className={styles.content}>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/profile'/>}/>
        <Route path='/profile/:id?' render={() => <Profile/>}/>
        <Route path='/messages' render={() => <Messages/>}/>
        <Route path='/users' render={() => <Users/>}/>
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/login' render={() => <Login/>}/>
        <Route path='*' render={() => '404'}/>
      </Switch>
    </div>
  )
}

export default Main
