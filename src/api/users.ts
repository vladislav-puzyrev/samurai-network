import server, { OperationData, OperationItems } from './server'
import { UserType } from '../types/types'

export const getUsers = async (count: number, page: number, term: string, friend: null | boolean) => {
  type getUsersRes = OperationItems<UserType>

  let uri = `users?count=${count}&page=${page}`
  if (term) uri += `&term=${term}`
  if (friend !== null) uri += `&friend=${friend}`

  const res = await server.get<getUsersRes>(uri)
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
