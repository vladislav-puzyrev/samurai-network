import * as constants from './constants'
import { UserType } from '../../types/types'

export const acceptFollow = (id: number) => ({
  type: constants.FOLLOW,
  id
})

export const acceptUnfollow = (id: number) => ({
  type: constants.UNFOLLOW,
  id
})

export const setUsers = (users: UserType[]) => ({
  type: constants.SET_USERS,
  users
})

export const setCurrentPage = (currentPage: number) => ({
  type: constants.SET_CURRENT_PAGE,
  currentPage
})

export const setTotalUsers = (totalUsers: number) => ({
  type: constants.SET_TOTAL_USERS_COUNT,
  totalUsersCount: totalUsers
})

export const setIsFetching = (isFetching: boolean) => ({
  type: constants.TOGGLE_IS_FETCHING,
  isFetching
})

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
  type: constants.TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
})

export const setTerm = (term: string) => ({
  type: constants.SET_TERM,
  term
})

export const toggleFollowedUser = (following: boolean) => ({
  type: constants.TOGGLE_IS_FOLLOWING_USER,
  following
})

export const setFriendMode = (mode: null | boolean) => ({
  type: constants.SET_FRIEND_MODE,
  mode
})
