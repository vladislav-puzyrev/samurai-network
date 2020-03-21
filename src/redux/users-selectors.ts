import { createSelector } from 'reselect'
import { RootReducerType } from './store'

export const getUsers = (state: RootReducerType) => {
  return state.users.users
}

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(() => true)
  }
)

export const getTotalUsersCount = (state: RootReducerType) => {
  return state.users.totalUsersCount
}

export const getCurrentPage = (state: RootReducerType) => {
  return state.users.currentPage
}

export const getIsFetching = (state: RootReducerType) => {
  return state.users.isFetching
}

export const getFollowingInProgress = (state: RootReducerType) => {
  return state.users.followingInProgress
}
