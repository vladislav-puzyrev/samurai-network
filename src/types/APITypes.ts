import { PhotosType, UserType } from './AppTypes'

export interface OperationResult {
  data: Object
  messages: Array<string>
  resultCode: number
}

export interface GetUsersResponse {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

export interface SavePhotoResponse extends OperationResult {
  data: {
    photos: PhotosType
  }
}

export interface MeResponse extends OperationResult {
  data: {
    id: number
    email: string
    login: string
  }
}

export interface LoginResponse extends OperationResult {
  data: {
    userId: number
  }
}

export interface GetCaptchaResponse {
  url: string
}

export interface GetAllDialogsResponse {
  id: number
  userName: string
  hasNewMessages: boolean
  lastDialogActivityDate: string
  lastUserActivityDate: string
  newMessagesCount: number
  photos: PhotosType
}
