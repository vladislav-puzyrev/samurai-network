import server, { OperationData } from './server'
import { PhotosType, ProfileType } from '../types/types'

export const getProfile = async (userID: number) => {
  const res = await server.get<ProfileType>(`profile/${userID}`)
  return res.data
}

export const getStatus = async (userID: number) => {
  const res = await server.get<string>(`profile/status/${userID}`)
  return res.data
}

export const updateStatus = async (status: string) => {
  const res = await server.put<OperationData>('profile/status', { status: status })
  return res.data
}

export const updatePhoto = async (photoFile: File) => {
  const formData = new FormData()
  formData.append('image', photoFile)

  type UpdatePhotoType = OperationData<{ photos: PhotosType }>

  const res = await server.put<UpdatePhotoType>('profile/photo', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })

  return res.data
}

export const updateProfile = async (profile: ProfileType) => {
  const res = await server.put<OperationData>('profile', profile)
  return res.data
}
