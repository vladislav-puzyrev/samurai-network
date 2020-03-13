import { createSelector } from 'reselect'
import { AppStateType } from './store'

export const getUsers = (state: AppStateType) => {
  return state.usersPage.users
}

export const getUsersSelector__BadRender = (state: AppStateType) => {
  return getUsers(state).filter(() => true)
}

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(() => true)
  },
)

export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress
}
