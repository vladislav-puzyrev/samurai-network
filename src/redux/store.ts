import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { reducer as form } from 'redux-form'
import profile from './profile/reducer'
import messages from './messages/reducer'
import users from './users/reducer'
import auth from './auth/reducer'
import init from './init/reducer'
import * as authAPI from '../api/auth'
import * as messagesAPI from '../api/messages'
import * as profileAPI from '../api/profile'
import * as securityAPI from '../api/security'
import * as usersAPI from '../api/users'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({ form, profile, messages, users, auth, init })
export const extraArgument = { authAPI, messagesAPI, profileAPI, securityAPI, usersAPI }

export type RootReducerType = ReturnType<typeof rootReducer>
export type ExtraArgumentType = typeof extraArgument
export type BaseThunkType<A extends Action = Action, R = void> = ThunkAction<R, RootReducerType, ExtraArgumentType, A>
export type InferValueTypes<T> = T extends { [keys: string]: infer U } ? U : never

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware.withExtraArgument(extraArgument))
  )
)

export default store
