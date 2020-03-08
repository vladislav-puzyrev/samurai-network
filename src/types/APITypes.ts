import { PhotosType, UserType } from './AppTypes'
import { ResultCodesEnum, ResultCodesForCaptchaEnum } from '../api/api'

export type OperationResult = {
  data: any
  messages: Array<string>
  resultCode: number
}

export type GetUsersResponse = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

export type SavePhotoResponse = {
  data: {
    photos: PhotosType
  }
  messages: Array<string>
  resultCode: number
}

export type MeResponse = {
  data: {
    id: number
    email: string
    login: string
  }
  messages: Array<string>
  resultCode: ResultCodesEnum
}

export type LoginResponse = {
  data: {
    userId: number
  }
  messages: Array<string>
  resultCode: ResultCodesEnum | ResultCodesForCaptchaEnum
}

export type GetCaptchaResponse = {
  url: string
}
