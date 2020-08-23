import * as actions from './actions'
import * as constants from './constants'
import { InferValueTypes } from '../store'
import { UserType } from '../../types/types'

const initialState = {
  users: [] as UserType[],
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as number[],
  term: '',
  isFollowingUser: false,
  friend: null as null | boolean
}

export type InitialStateType = typeof initialState
export type ActionsType = ReturnType<InferValueTypes<typeof actions>>

function reducer (state = initialState, action: ActionsType): InitialStateType {
  switch (action.type) {
    case constants.FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: true }
          }
          return user
        })
      }

    case constants.UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: false }
          }
          return user
        })
      }

    case constants.SET_USERS:
      return {
        ...state,
        users: action.users
      }

    case constants.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case constants.SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }

    case constants.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case constants.TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }

    case constants.SET_TERM:
      return {
        ...state,
        term: action.term
      }

    case constants.TOGGLE_IS_FOLLOWING_USER:
      return {
        ...state,
        isFollowingUser: action.following
      }

    case constants.SET_FRIEND_MODE:
      return {
        ...state,
        friend: action.mode
      }

    default:
      return state
  }
}

export default reducer
