import server, { OperationData, OperationItems } from './server'
import { UserType } from '../types/types'

export const getUsers = async (count: number, page: number, term: string, friend: boolean) => {
  type getUsersRes = OperationItems<UserType>

  const res = await server.get<getUsersRes>(`users?count=${count}&page=${page}&term=${term}`)
  return res.data
}

export const isFollowing = async (userID: number) => {
  const res = await server.get<boolean>(`follow/${userID}`)
  return res.data
}

export const follow = async (userID: number) => {
  const res = await server.post<OperationData>(`follow/${userID}`)
  return res.data
}

export const unfollow = async (userID: number) => {
  const res = await server.delete<OperationData>(`follow/${userID}`)
  return res.data
}
