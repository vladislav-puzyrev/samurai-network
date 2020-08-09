import { ActionsType } from './reducer'
import {
  acceptFollow,
  acceptUnfollow,
  setIsFetching,
  setTotalUsers,
  setUsers,
  toggleFollowedUser,
  toggleFollowingProgress
} from './actions'
import { BaseThunkType } from '../store'

type ThunkType = BaseThunkType<ActionsType>

export const getRequestUsers = (pageSize: number, currentPage: number, term: string, friend: boolean): ThunkType => {
  return async (dispatch, getState, { usersAPI }) => {
    dispatch(setIsFetching(true))
    const response = await usersAPI.getUsers(pageSize, currentPage, term, friend)
    dispatch(setUsers(response.items))
    dispatch(setTotalUsers(response.totalCount))
    dispatch(setIsFetching(false))
  }
}

export const follow = (userID: number): ThunkType => {
  return async (dispatch, getState, { usersAPI }) => {
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
  return async (dispatch, getState, { usersAPI }) => {
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
  return async (dispatch, getState, { usersAPI }) => {
    const response = await usersAPI.isFollowing(userID)
    dispatch(toggleFollowedUser(response))
  }
}
