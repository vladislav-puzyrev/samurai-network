import axios from 'axios'
import {
  GetUsersResponse,
  OperationResult,
  SavePhotoResponse,
  MeResponse,
  LoginResponse,
  GetCaptchaResponse,
  GetAllDialogsResponse
} from '../types/APITypes'
import { ProfileType } from '../types/AppTypes'

const server = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY':
      '420dc76f-b29f-496f-bc3d-479cffbbc8e0'
  }
})

export const usersAPI = {
  async getUsers (count: number, page: number, term = '') {
    const res = await server.get<GetUsersResponse>(`users?count=${count}&page=${page}&term=${term}`)
    return res.data
  },
  async isFollowing (userID: number) {
    const res = await server.get<boolean>(`follow/${userID}`)
    return res.data
  },
  async follow (userID: number) {
    const res = await server.post<OperationResult>(`follow/${userID}`)
    return res.data
  },
  async unfollow (userID: number) {
    const res = await server.delete<OperationResult>(`follow/${userID}`)
    return res.data
  }
}

export const profileAPI = {
  async getProfile (userID: number) {
    const res = await server.get<ProfileType>(`profile/${userID}`)
    return res.data
  },
  async getStatus (userID: number) {
    const res = await server.get<string>(`profile/status/${userID}`)
    return res.data
  },
  async updateStatus (status: string) {
    const res = await server.put<OperationResult>(`profile/status`, { status: status })
    return res.data
  },
  async updatePhoto (photoFile: File) {
    const formData = new FormData()
    formData.append(`image`, photoFile)

    const res = await server.put<SavePhotoResponse>(`profile/photo`, formData, {
      headers: {
        'Content-Type':
          'multipart/form-data'
      }
    })

    return res.data
  },
  async updateProfile (profile: ProfileType) {
    const res = await server.put<OperationResult>(`profile`, profile)
    return res.data
  }
}

export const authAPI = {
  async me () {
    const res = await server.get<MeResponse>(`auth/me`)
    return res.data
  },
  async login (email: string, password: string, rememberMe = true, captcha: string) {
    const res = await server.post<LoginResponse>(`auth/login`, { email, password, rememberMe, captcha })
    return res.data
  },
  async logout () {
    const res = await server.post<OperationResult>(`auth/logout`)
    return res.data
  }
}

export const securityAPI = {
  async getCaptcha () {
    const res = await server.get<GetCaptchaResponse>(`security/get-captcha-url`)
    return res.data
  }
}

export const dialogsAPI = {
  // Сортировка человека вверх при начале чатинга
  async startChatting (userID: number) {
    const res = await server.put<OperationResult>(`dialogs/${userID}`)
    return res.data
  },
  // Получить все диалоги (без сообщений просто для вывода)
  async getAllDialogs () {
    const res = await server.get<Array<GetAllDialogsResponse>>(`dialogs`)
    return res.data
  },
  async getDialog (userID: number) {
    const res = await server.get<any>(`dialogs/${userID}/messages`)
    return res.data
  },
  async sendMessage (userID: number, message: string) {
    const res = await server.post<any>(`dialogs/${userID}/messages`, message)
    return res.data
  },
  async isMessageViewed (messageID: number) {
    const res = await server.get<any>(`dialogs/messages/${messageID}/viewed`)
    return res.data
  },
  async putMessageInSpam (messageID: number) {
    const res = await server.post<any>(`dialogs/messages/${messageID}/spam`)
    return res.data
  },
  async deleteMessage (messageID: number) {
    const res = await server.delete<any>(`dialogs/messages/${messageID}`)
    return res.data
  },
  async restoreMessage (messageID: number) {
    const res = await server.put<any>(`dialogs/messages/${messageID}/restore`)
    return res.data
  },
  async messagesNewerThanDate (userID: number, date: string) {
    const res = await server.get<any>(`dialogs/${userID}/messages/new?newerThen=${date}`)
    return res.data
  },
  async getNewMessages () {
    const res = await server.get<any>(`dialogs/messages/new/count`)
    return res.data
  }
}
