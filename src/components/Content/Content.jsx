import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import styles from './Content.module.css';
import UsersContainer from './Users/UsersContainer';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import Login from './Login/Login';
import {withSuspense} from '../../hoc/withSuspense';

const MessagesContainer = React.lazy(
    () => import('./Messages/MessagesContainer'),
);
const ProfileContainer = React.lazy(
    () => import('./Profile/ProfileContainer'),
);

function Content() {
  return (
      <div className={styles.content}>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/profile'/>}/>
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
          <Route path='/messages' render={withSuspense(MessagesContainer)}/>
          <Route path='/users' render={() => <UsersContainer/>}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/login' render={() => <Login/>}/>
          <Route path='*' render={() => '404'}/>
        </Switch>
      </div>
  );
}

export default Content;