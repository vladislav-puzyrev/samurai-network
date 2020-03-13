import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import profileReducer from './profile-reducer'
import messagesReducer from './messages-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import initReducer from './init-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  init: initReducer,
  form: formReducer,
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

// @ts-ignore
export default store
