import { usersAPI } from '../api/api'
import { IUser } from '../types/types'
import { RootReducerType } from './store'
import { ThunkAction } from 'redux-thunk'

/* Action types */
const FOLLOW = 'samurai-network/users/FOLLOW'
const UNFOLLOW = 'samurai-network/users/UNFOLLOW'
const SET_USERS = 'samurai-network/users/SET_USERS'
const SET_CURRENT_PAGE = 'samurai-network/users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'samurai-network/users/SET_TOTAL_USERS_COUNT'
const SET_TERM = 'samurai-network/users/SET_TERM'
const TOGGLE_IS_FETCHING = 'samurai-network/users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'samurai-network/users/TOGGLE_IS_FOLLOWING_PROGRESS'
const TOGGLE_IS_FOLLOWING_USER = 'samurai-network/users/TOGGLE_IS_FOLLOWING_USER'

const initialState = {
  users: [] as Array<IUser>,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,
  term: '',
  isFollowingUser: false,
}

type InitialStateType = typeof initialState

type ActionTypes =
  AcceptFollowActionType |
  AcceptUnfollowActionType |
  SetUsersActionType |
  SetCurrentPageActionType |
  SetTotalUsersActionType |
  SetIsFetchingActionType |
  ToggleFollowingProgressActionType |
  setTermActionType |
  toggleFollowedUserActionType

function usersReducer (state = initialState, action: ActionTypes): InitialStateType {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: true }
          }
          return user
        }),
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: false }
          }
          return user
        }),
      }

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      }

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching ?
          [...state.followingInProgress, action.userId] :
          state.followingInProgress.filter(id => id !== action.userId),
      }

    case SET_TERM:
      return {
        ...state,
        term: action.term,
      }

    case TOGGLE_IS_FOLLOWING_USER:
      return {
        ...state,
        isFollowingUser: action.following
      }

    default:
      return state
  }
}

/* Action creators */
type AcceptFollowActionType = { type: typeof FOLLOW, id: number };
export const acceptFollow = (id: number): AcceptFollowActionType => ({
  type: FOLLOW,
  id
})

type AcceptUnfollowActionType = { type: typeof UNFOLLOW, id: number };
export const acceptUnfollow = (id: number): AcceptUnfollowActionType => ({
  type: UNFOLLOW,
  id
})

type SetUsersActionType = { type: typeof SET_USERS, users: Array<IUser> };
export const setUsers = (users: Array<IUser>): SetUsersActionType => ({
  type: SET_USERS,
  users
})

type SetCurrentPageActionType = { type: typeof SET_CURRENT_PAGE, currentPage: number };
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})

type SetTotalUsersActionType = { type: typeof SET_TOTAL_USERS_COUNT, totalUsersCount: number };
export const setTotalUsers = (totalUsers: number): SetTotalUsersActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount: totalUsers,
})

type SetIsFetchingActionType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean };
export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})

type ToggleFollowingProgressActionType = { type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: boolean, userId: number };
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
})

type setTermActionType = { type: typeof SET_TERM, term: string }
export const setTerm = (term: string): setTermActionType => ({
  type: SET_TERM,
  term,
})

type toggleFollowedUserActionType = { type: typeof TOGGLE_IS_FOLLOWING_USER, following: boolean }
export const toggleFollowedUser = (following: boolean): toggleFollowedUserActionType => ({
  type: TOGGLE_IS_FOLLOWING_USER,
  following,
})

/* Thunk creators */
// type GetStateType = () => AppStateType
// type DispatchType = Dispatch<ActionTypes>
type ThunkType = ThunkAction<Promise<void>, RootReducerType, unknown, ActionTypes>

export const getRequestUsers = (pageSize: number, currentPage: number, term = ''): ThunkType => {
  return async (dispatch) => {
    dispatch(setIsFetching(true))
    const response = await usersAPI.getUsers(pageSize, currentPage, term)
    dispatch(setUsers(response.items))
    dispatch(setTotalUsers(response.totalCount))
    dispatch(setIsFetching(false))
  }
}

export const follow = (userID: number): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userID))
    const response = await usersAPI.follow(userID)
    if (response.resultCode === 0) {
      dispatch(acceptFollow(userID))
      dispatch(toggleFollowedUser(true))
    }
    dispatch(toggleFollowingProgress(false, userID))
  }
}

export const unfollow = (userID: number): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userID))
    const response = await usersAPI.unfollow(userID)
    if (response.resultCode === 0) {
      dispatch(acceptUnfollow(userID))
      dispatch(toggleFollowedUser(false))
    }
    dispatch(toggleFollowingProgress(false, userID))
  }
}

export const isFollowing = (userID: number): ThunkType => {
  return async (dispatch) => {
    const response = await usersAPI.isFollowing(userID)
    dispatch(toggleFollowedUser(response))
  }
}

export default usersReducer
